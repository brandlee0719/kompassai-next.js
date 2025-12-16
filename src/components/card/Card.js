import CardButton from "../button/CardButton";

export default function Card(props) {
  const { children } = props;
  return (
    <div className="flex flex-col gap-6">
      <div className=" aspect-[1.75]  w-full">
        <img src={children.image} className="  w-full" alt="cardImage" />
      </div>
      <div className="flex flex-col mx-6 gap-4">
        <div>
          <CardButton children={children.symbol} />
        </div>
        <div className="font-Outfit text-xl xl:text-xl 2xl:text-3xl font-bold text-stone-950">
          <p>{children.title}</p>
        </div>
        <div className="font-Outfit text-lg md:text-lg font-normal leading-7 text-stone-950">
          <p>{children.content}</p>
        </div>
      </div>
    </div>
  );
}
