import Header from "./Header"
import Summary from "./Summary"
import CallsSection from "./CallsSection"

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Summary />
      <CallsSection />
    </div>
  );
}