import { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";

export default function EnterEmailForm(props) {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className="relative w-full max-w-[260rem] flex justify-start items-center pl-5 py-[2px] pr-[2px] bg-white rounded-full gap-[2px]">
      <input
        type="email"
        placeholder="Enter your work email"
        value={email}
        onChange={onChange}
        className="w-full inline-flex flex-grow outline-none ring-0 border-none focus:outline-none focus:ring-0 focus:border-none"
      />
      <Button
        color={email ? "gray" : "blue-gray"}
        disabled={!email}
        className="w-[170px] bg-magenta-500 hover:bg-[#ad2847] text-white text-sm normal-case rounded-full p-2 transition-all duration-300 cursor-pointer"
      >
        Get Started
      </Button>
    </div>
  );
}
