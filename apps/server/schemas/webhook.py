from pydantic import BaseModel

from datetime import datetime
from enum import Enum
from typing import Any, Dict, List, Literal, Optional, Union

# structure of Vapi-sent events. pulled from their documentation
class VapiCall(BaseModel):
    # todo: update with actual message structure
    model_config = {"extra": "allow"}

class ChatCompletionMessageParamModel(BaseModel):
    role: str
    content: Optional[Union[str, List[Dict[str, Any]]]] = None
    name: Optional[str] = None

    model_config = {"extra": "allow"}

class ConversationMessage(BaseModel):
    role: Literal["user", "system", "bot", "function_call", "function_result"]
    message: Optional[str] = None
    name: Optional[str] = None
    args: Optional[str] = None
    result: Optional[str] = None
    time: int
    endTime: Optional[int] = None
    secondsFromStart: int

class VapiWebhookEnum(str, Enum):
    STATUS_UPDATE = "status-update"
    FUNCTION_CALL = "function-call"
    END_OF_CALL_REPORT = "end-of-call-report"
    SPEECH_UPDATE = "speech-update"
    TRANSCRIPT = "transcript"

class VapiCallStatus(str, Enum):
    queued = "queued"
    ringing = "ringing"
    in_progress = "in-progress"
    forwarding = "forwarding"
    ended = "ended"

class BaseVapiPayload(BaseModel):
    call: VapiCall

class StatusUpdatePayload(BaseVapiPayload):
    type: Literal[VapiWebhookEnum.STATUS_UPDATE]
    status: VapiCallStatus
    messages: Optional[List[ChatCompletionMessageParamModel]] = None

class FunctionCallPayload(BaseVapiPayload):
    type: Literal[VapiWebhookEnum.FUNCTION_CALL]
    functionCall: Dict[str, Any]  # Could make stricter with name/args schema

class EndOfCallReportPayload(BaseVapiPayload):
    type: Literal[VapiWebhookEnum.END_OF_CALL_REPORT]
    endedReason: str
    transcript: str
    messages: List[ConversationMessage]
    summary: str
    recordingUrl: Optional[str] = None

class SpeechUpdatePayload(BaseVapiPayload):
    type: Literal[VapiWebhookEnum.SPEECH_UPDATE]
    status: Literal["started", "stopped"]
    role: Literal["assistant", "user"]

class TranscriptPayload(BaseVapiPayload):
    type: Literal[VapiWebhookEnum.TRANSCRIPT]
    role: Literal["assistant", "user"]
    transcriptType: Literal["partial", "final"]
    transcript: str

VapiPayload = Union[
    StatusUpdatePayload,
    FunctionCallPayload,
    EndOfCallReportPayload,
    SpeechUpdatePayload,
    TranscriptPayload,
]

# in case it's useful later, LiveKit events too. placeholder for now
class LiveKitEvent(BaseModel):