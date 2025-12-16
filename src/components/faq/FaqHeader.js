import Text from "../Text";

export default function FaqHeader(props) {
  return (
    <div className="bg-emerald-200 rounded-[16px] p-[40px] mt-[40px] mx-[40px]">
      <Text variant="Header3" className="text-stone-950">
        {props.header}
      </Text>
      <Text variant="CaptionRegular" className="text-stone-950 mt-[15px]">
        {props.value}
      </Text>
    </div>
  );
}
