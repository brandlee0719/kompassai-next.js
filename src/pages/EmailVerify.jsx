import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

import { AuthContext } from "@/context/AuthContext";
import AuthLayout from "@/components/AuthLayout";
import useAuth from "@/hooks/useAuth";

import { toast } from "react-toastify";

import { ReactComponent as Logo } from "@/assets/image/icons/logo.svg";
import CheckBoxIcon from "@/assets/image/icons/checkbox_data.svg";
import GoogleIcon from "@/assets/image/icons/google.svg";
import Text from "@/components/Text";

import useKompassRouter from '@/hooks/useKompassRouter';

export default function EmailVerify() {
  const { kompassNavigate } = useKompassRouter();

  const authContext = useContext(AuthContext);

  const [verifyCode, setVerifyCode] = useState("");

  var codeLength = 6;
  var verifyKeyInputRefArray = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const gotoSignin = () => {
    // kompassNavigate("/signin");
  };

  const onChanged = (index, value) => {
    console.log(verifyKeyInputRefArray);

    if (!verifyKeyInputRefArray[0]) return;

    if (value.length == 0) {
      const fixedVerifyCode = verifyCode.slice(0, index);
      if (fixedVerifyCode.length >= 1)
        verifyKeyInputRefArray[fixedVerifyCode.length - 1].current.focus();
      setVerifyCode(fixedVerifyCode);
    } else {
      const fixedVerifyCode = verifyCode + value;
      if (fixedVerifyCode.length < codeLength)
        verifyKeyInputRefArray[fixedVerifyCode.length].current.focus();
      setVerifyCode(fixedVerifyCode);
    }
  };

  useEffect(() => {
    if (!authContext.userInfo?.email)
      kompassNavigate('/signin')
  }, [])

  useEffect(() => {
    if (!verifyKeyInputRefArray[0]) return;

    verifyKeyInputRefArray.forEach((inputRef, index) => {
      inputRef.current.value =
        verifyCode[index] === undefined ? "" : verifyCode[index];
    });

    if (verifyCode.length >= codeLength) {

      const VerifyCode = async () => {
        const email = authContext.userInfo.email;
        try {
          if (email) {


            authContext.handleLoading(true);
            await authContext.verifyCode(email, verifyCode)
            authContext.handleLoading(false);

            toast.success("Verification Success!", { theme: "colored" });

            setTimeout(() => {
              kompassNavigate('/signin')
            }, 500);
          } else {
            kompassNavigate('/signin')
          }
        } catch (err) {
          authContext.handleLoading(false);
          setVerifyCode('');
          if (err instanceof Error) {
            toast.error(err.message, { theme: "colored" })
          }
          return;
        }
      }

      VerifyCode();
    }
  }, [verifyCode]);

  const handlePaste = (event) => {
    event.preventDefault();
    // @ts-ignore
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedText = clipboardData.getData("text/plain");

    if (pastedText) {
      let tempCode = [];
      for (let i = 0; i < pastedText.length; i++) {
        const letter = pastedText[i];
        tempCode.push(letter);

        verifyKeyInputRefArray[Math.min(tempCode.length - 1, 6 - 1)].current.focus();
      }

      setVerifyCode(tempCode.join(''))
    }
  };

  const resendCode = async () => {
    alert('resend');

    authContext.handleLoading(true);
    await authContext.resendCode(authContext.userInfo?.email)
    authContext.handleLoading(false);

    setVerifyCode('');
  }

  return (
    <AuthLayout>
      <div className="w-full flex justify-center">
        <Logo className="w-[170px] h-[35px]" fill="#fff" />
      </div>
      <div className="w-full bg-white rounded-xl mt-8 p-6">
        <Text
          variant="Header4"
          className="w-full flex justify-center font-Outfit font-extrabold text-2xl"
        >
          Verify your email address
        </Text>
        <div className="w-full flex justify-center font-Outfit text-sm md:text-md">
          We’ve just sent 6-digit code to{" "}
          <span className="text-magenta-500 cursor-pointer select-none ml-1">
            {authContext.userInfo?.email}
          </span>
        </div>
        <hr
          size="8"
          width="100%"
          color="white"
          style={{ marginTop: 20, marginBottom: 20 }}
        />
        <div className="w-full flex font-Outfit font-semibold text-md justify-center md:justify-start mt-2">
          {Array.from({ length: 6 }, (_, i) => {
            return (
              <input
                key={i}
                disabled={authContext.isLoading ? true : false}
                ref={verifyKeyInputRefArray[i]}
                onChange={(e) => {
                  onChanged(i, e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.keyCode == 8) {
                    const fixedVerifyCode = verifyCode.slice(0, (verifyCode.length > 0 ? verifyCode.length - 1 : 0))
                    if (fixedVerifyCode.length >= 0)
                      verifyKeyInputRefArray[fixedVerifyCode.length].current.focus();
                    setVerifyCode(fixedVerifyCode);
                  }
                }}
                type="text"
                maxLength="1"
                className="w-[50px] md:w-full h-[50px] rounded-full border-[1px] border-[#E8E7E7] font-Outfit font-[300] text-3xl text-center mr-1"
                onPaste={handlePaste} />
            );
          })}
        </div>
      </div>
      <div className="w-full text-center font-Outfit text-sm text-[#8B9E9F] mt-8">
        Haven’t seen the email? Check your spam folder,{" "}
        <span onClick={resendCode} className="text-magenta-500 cursor-pointer select-none" disabled={authContext.isLoading ? true : false}>
          resend
        </span>{" "}
        or{" "}
        <span className="text-magenta-500 cursor-pointer select-none" disabled={authContext.isLoading ? true : false}>
          change email
        </span>
        .
      </div>
    </AuthLayout>
  );
}
