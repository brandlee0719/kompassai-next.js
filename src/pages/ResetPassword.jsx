import { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ReCAPTCHA from "react-google-recaptcha";
import { KOMPASSAI_RECAPTCHA_SITE_KEY } from "@/env";

import { useAuthValues } from "@/context/AuthContext";
import useAuth from "@/hooks/useAuth";

import AuthLayout from "@/components/AuthLayout";
import { ReactComponent as Logo } from "@/assets/image/icons/logo.svg";
import CheckBoxIcon from "@/assets/image/icons/checkbox_data.svg";
import GoogleIcon from "@/assets/image/icons/google.svg";
import Text from "@/components/Text";

import useKompassRouter from '@/hooks/useKompassRouter';

const schema = yup.object().shape({
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be at most 32 characters')
    .matches(/[a-z]+/, "password must contain at least 1 lowercase character")
    .matches(/[A-Z]+/, "password must contain at least 1 uppercase character")
    .matches(/[@$!%*#?&]+/, "password must contain at least one special character")
    .matches(/\d+/, "password must contain at least one number"),
  confirmPassword: yup.string().required('Confirm password is required')
});

export default function ResetPassword() {
  const { kompassNavigate } = useKompassRouter();
  const authContext = useAuthValues();

  const { resetPassword } = useAuth();

  const { register, getValues, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const captchaRef = useRef(null)

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(null);
  const [verifyCode, setVerifyCode] = useState("");
  const [stage, setStage] = useState(1);

  var codeLength = 6;
  var verifyKeyInputRefArray = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

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

        verifyKeyInputRefArray[Math.min(tempCode.length, 6 - 1)].current.focus();
      }

      setVerifyCode(tempCode.join(''))
    }
  };

  useEffect(() => {
    if (!verifyKeyInputRefArray[0]) return;

    verifyKeyInputRefArray.forEach((inputRef, index) => {
      if (inputRef?.current)
        inputRef.current.value = verifyCode[index] === undefined ? "" : verifyCode[index];
    });

    // if (verifyCode.length >= codeLength) {
    //   const VerifyCode = async () => {
    //     try {
    //       authContext.handleLoading(true);
    //       await authContext.verifyCode(email, verifyCode);
    //       authContext.handleLoading(false);

    //       setStage(3);
    //     } catch(err) {
    //       authContext.handleLoading(false);
    //       setVerifyCode('');
    //       if (err instanceof Error) {
    //         toast.error(err.message, { theme: "colored" })
    //       }
    //       return;
    //     }
    //   }

    //   VerifyCode();
    // }
  }, [verifyCode]);

  const gotoSignin = () => {
    kompassNavigate("/signin");
  };

  const onResetPassword = async () => {
    if (email.length == 0) {
      setEmailErr('Please input your email');
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailErr('Please input correct email');
      return;
    }

    setVerifyCode('');
    const captchaToken = await captchaRef.current.executeAsync();

    try {
      authContext.handleLoading(true);
      await authContext.sendCode(email);
      authContext.handleLoading(false);
      toast.info(`Just sent an verification code to ${email}.`, { theme: "colored" })

      setStage(2);
    } catch (err) {
      authContext.handleLoading(false);
      if (err instanceof Error) {
        toast.error(err.message, { theme: "colored" })
      }
      return;
    }

  }

  const onChangePassword = async () => {
    const values = getValues();
    if (values['password'] !== values['confirmPassword']) {
      toast.error('Please check your confirm password', { theme: "colored" });
      return;
    }

    if (verifyCode.length < codeLength) {
      toast.error('Please check your verification code', { theme: "colored" });
      return;
    }

    try {
      await authContext.forgotPassword(email, verifyCode, values['password'])
      toast.success('Password changed successfully', { theme: "colored" });
      await authContext.signOut();
      toast.info('Please re-login', { theme: "colored" });

    } catch (error) {
      toast.error(error.message, { theme: "colored" });
    }
  }

  return (
    (
      <AuthLayout>
        <div className="w-full flex justify-center">
          <Logo className="w-[170px] h-[35px]" fill="#fff" />
        </div>
        <div className="w-full bg-white rounded-xl mt-8 p-6">
          <Text
            variant="Header4"
            className="w-full flex justify-center font-Outfit font-extrabold text-2xl"
          >
            Reset my password
          </Text>
          <hr
            size="8"
            width="100%"
            color="white"
            style={{ marginTop: 20, marginBottom: 20 }}
          />

          {
            stage == 1 ? (
              <>
                <div className="w-full flex font-Outfit font-semibold text-md justify-center md:justify-start">
                  Email address
                </div>
                <div className="w-full flex flex-row rounded-full items-center bg-white border-[1px] border-[#E8E7E7] mt-2">
                  <input
                    value={email}
                    onChange={(e) => { setEmail(e.currentTarget.value); setEmailErr(null); }}
                    className="w-full rounded-full outline-none bg-none p-[8px_12px_8px_24px] font-Outfit font-[300px] text-[16px] disabled:bg-gray-200"
                    placeholder="e.g. johndoe@kompass.ai"
                    disabled={authContext.isLoading ? true : false}
                  />
                </div>
                {emailErr && <p className="error-text text-red-600">{emailErr}</p>}
                <ReCAPTCHA
                  sitekey={KOMPASSAI_RECAPTCHA_SITE_KEY}
                  size="invisible"
                  ref={captchaRef}
                />
                <Button
                  onClick={onResetPassword}
                  className="w-full h-[48px] flex items-center justify-center bg-magenta-500 disabled:bg-[#929292] px-[24px] text-md text-white font-Outfit font-semibold rounded-full mt-6"
                  disabled={authContext.isLoading ? true : false}>
                  RESET PASSWORD
                </Button>
              </>
            ) :  (
                stage == 2 ? (
                  <>
                    <form onSubmit={handleSubmit(onChangePassword)}>
                      <div className="w-full flex font-Outfit font-semibold text-md justify-center md:justify-start mt-2">
                        Verification code
                      </div>
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
                      <div className="w-full flex font-Outfit font-semibold text-md justify-center md:justify-start mt-4">
                        Choose a password
                      </div>
                      <div className="w-full flex flex-row p-[8px_12px] rounded-[40px] items-center bg-white border-[1px] border-[#E8E7E7] mt-2">
                        <input
                          {...register("password")}
                          type="password"
                          className="w-full rounded-xl outline-none bg-none pl-[16px] font-Outfit font-[300px] text-[16px]"
                          placeholder=""
                          disabled={authContext.isLoading}
                        />
                      </div>
                      {errors.password && <p className="error-text text-red-600">{errors.password.message?.toString()}</p>}

                      <div className="w-full flex font-Outfit font-semibold text-md justify-center md:justify-start mt-4">
                        Confirm your password
                      </div>
                      <div className="w-full flex flex-row p-[8px_12px] rounded-[40px] items-center bg-white border-[1px] border-[#E8E7E7] mt-2">
                        <input
                          {...register("confirmPassword")}
                          type="password"
                          className="w-full rounded-xl outline-none bg-none pl-[16px] font-Outfit font-[300px] text-[16px]"
                          placeholder=""
                          disabled={authContext.isLoading}
                        />
                      </div>
                      {errors.confirmPassword && <p className="error-text text-red-600">{errors.confirmPassword.message?.toString()}</p>}
                      <Button
                        type="submit"
                        className="w-full h-[48px] flex items-center justify-center bg-magenta-500 disabled:bg-[#929292] px-[24px] text-md text-white font-Outfit font-semibold rounded-full mt-6">
                        Submit
                      </Button>
                    </form>
                  </>
                ) : null
              )
          }

        </div>
        <div className="w-full flex justify-center font-Outfit text-md text-white mt-8">
          Found your password?
          <span
            className="text-magenta-500 cursor-pointer select-none ml-1"
            onClick={() => gotoSignin()}
          >
            Sign in here
          </span>
        </div>
        <div className="w-full text-center font-Outfit text-sm text-[#8B9E9F] mt-8">
          By logging in, I agree to the{" "}
          <span className="text-magenta-500 cursor-pointer select-none">
            Terms of service
          </span>{" "}
          and{" "}
          <span className="text-magenta-500 cursor-pointer select-none">
            Privacy policy
          </span>
          . I also agree to receive emails and communication relating to
          KompassAI services and offers.
        </div>
      </AuthLayout>
    )
  );
}
