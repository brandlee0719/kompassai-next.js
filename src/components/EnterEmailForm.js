import { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";

export default function EnterEmailForm(props) {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className="relative flex justify-center w-full max-w-[260rem]">
      <input
        type="email"
        placeholder="Enter your work email"
        value={email}
        onChange={onChange}
        className="w-full md:w-[460px] h-[67px] lg:w-[540px]  rounded-full p-[12px_16px] md:p-[18px_24px] border-[0px] bg-white "
      />
      <Button
        color={email ? "gray" : "blue-gray"}
        disabled={!email}
        className="!absolute right-[4px] top-[4px] w-[100px] md:w-[175px] h-[57px] rounded-full bg-magenta-500 text-white"
      >
        GET STARTED
      </Button>
    </div>
  );
}
