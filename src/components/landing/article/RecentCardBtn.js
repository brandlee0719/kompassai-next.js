export default function RecentCardBtn(props) {
  const { children } = props;
  return (
    <button className=" px-4 py-2 bg-white rounded-full font-Outfit text-emerald-500 text-base font-normal leading-[22.4px] uppercase">
      {children}
    </button>
  );
}
