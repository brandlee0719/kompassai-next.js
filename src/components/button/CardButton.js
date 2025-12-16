export default function CardButton(props) {
  const { children } = props;
  return (
    <button className=" px-4 py-2 bg-emerald-200 rounded-[40px] font-Outfit text-emerald-500 text-base font-normal leading-[22.4px] uppercase">
      {children}
    </button>
  );
}
