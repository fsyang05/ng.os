import Header from "./Header"
import Summary from "./Summary"
import CallsSection from "./CallsSection"
import DataSnapshot from "./DataSnapshot";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <DataSnapshot />
      <Summary />
      <CallsSection />
    </div>
  );
}