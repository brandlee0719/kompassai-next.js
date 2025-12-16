import Text from "../Text";
import SupportBar from "./SupportBar";

export default function SupportPanel({
  background = "bg-stone-950",
}) {
  return (
    <div className={`py-0 ${background} overflow-hidden`}>
      <SupportBar />
    </div>
  );
}
