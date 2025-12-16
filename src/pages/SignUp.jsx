import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import PhoneInput from "react-phone-input-2";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
// import Google from '@/components/auth/Google';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
import ReCAPTCHA from "react-google-recaptcha";
import { KOMPASSAI_RECAPTCHA_SITE_KEY } from "@/env";

import { AuthContext } from "@/context/AuthContext";
import useAuth from "@/hooks/useAuth";

import AuthLayout from "@/components/AuthLayout";

import { ReactComponent as Logo } from "@/assets/image/icons/logo.svg";
import { ReactComponent as HidePassword } from "@/assets/image/icons/hide.svg";
import CheckBoxIcon from "@/assets/image/icons/checkbox_data.svg";
import GoogleIcon from "@/assets/image/icons/google.svg";
import Text from "@/components/Text";

import "@/components/phone-input/style.css";

import { COGNITO_GOOGLE_DEFAULT_PASSWORD } from "@/utils/constants";

import useKompassRouter from "@/hooks/useKompassRouter";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid Email")
    .required("Email is required"),
  userName: yup.string().required("Last Name is required"),
  companyName: yup.string().required("Company Name is required"),
  // mobile: yup.string().required('Mobile Number is required'),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be at most 32 characters")
    .matches(/[a-z]+/, "password must contain at least 1 lowercase character")
    .matches(/[A-Z]+/, "password must contain at least 1 uppercase character")
    .matches(
      /[@$!%*#?&]+/,
      "password must contain at least one special character"
    )
    .matches(/\d+/, "password must contain at least one number"),
  // confirmPassword: yup.string().required('Confirm password is required')
});

export default function SignUp() {
  const { kompassNavigate } = useKompassRouter();

  const authContext = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setisLoading] = useState(false);
  const [isGoogleAuth, setIsGoogleAuth] = useState(false);
  const [mobile, setMobile] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const captchaRef = useRef(null);

  const gotoSignin = () => {
    kompassNavigate("/signin");
  };
  const gotoVerification = () => {
    kompassNavigate("/verification");
  };

  const isEmail = (input) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(input);
  };

  const onSubmitHandler = (data) => {
    if (data.confirmPassword !== data.password)
      toast.error("Please check your confirm password", { theme: "colored" });
    if (data.mobile === "")
      toast.error("Please check your mobile number", { theme: "colored" });
    handleRegister(data);
  };

  const handleRegister = async (data) => {
    const captchaToken = captchaRef.current.getValue();
    if (captchaToken === "" || captchaToken == null) {
      toast.error("Please check your captcha", { theme: "colored" });
      return;
    }

    try {
      setisLoading(true);

      data = { ...data, mobile };
      await authContext.signUpWithEmail(data.email, data.password, data, {
        captcha: captchaToken,
      });

      setisLoading(false);

      kompassNavigate("/verification");
    } catch (err) {
      setisLoading(false);

      console.log(err);
      if (err instanceof Error) {
        if (
          err.message.includes(
            "PreAuthentication failed with error Recaptcha verification failed."
          )
        ) {
          toast.error("Recaptcha verification failed", { theme: "colored" });
        } else if (err.message.includes("Missing Captcha Value")) {
          toast.error("Missing Captcha Value", { theme: "colored" });
        } else if (err.message.includes("User doesn't exist")) {
          toast.error("User doesn't exist", { theme: "colored" });
        } else {
          toast.error(err.message, { theme: "colored" });
        }
        captchaRef.current.reset();
      }
    }
  };

  const googleSignup = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        setisLoading(true);
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer  ${codeResponse.access_token}`,
              Accept: "application/json",
            },
          }
        );
        const _resData = await response.json();
        setisLoading(false);
        setIsGoogleAuth(true);

        reset({
          email: _resData.email,
          userName: _resData.name,
          password: COGNITO_GOOGLE_DEFAULT_PASSWORD,
          confirmPassword: COGNITO_GOOGLE_DEFAULT_PASSWORD,
        });
      } catch (err) {
        setisLoading(false);
        setIsGoogleAuth(false);
        console.log(err);
        if (err instanceof Error) {
          if (
            err.message.includes(
              "PreAuthentication failed with error Recaptcha verification failed."
            )
          ) {
            toast.error("Recaptcha verification failed", { theme: "colored" });
          } else if (err.message.includes("Missing Captcha Value")) {
            toast.error("Missing Captcha Value", { theme: "colored" });
          } else if (err.message.includes("User doesn't exist")) {
            toast.error("User doesn't exist", { theme: "colored" });
          } else {
            toast.error(err.message, { theme: "colored" });
          }
          captchaRef.current.reset();
        }
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <AuthLayout>
      <div className="w-full flex justify-center">
        <Logo className="w-[170px] h-[35px]" fill="#000" />
      </div>
      <div className="w-full bg-white rounded-xl p-3">
        <Text
          variant="Header4"
          className="w-full flex justify-center font-Outfit font-extrabold text-2xl"
        >
          Create a free account
        </Text>
        <div className="w-full flex justify-center font-Outfit text-md md:text-md">
          Get free contact details of decision-markers
        </div>
        <hr
          size="8"
          width="100%"
          color="white"
          style={{ marginTop: 20, marginBottom: 20 }}
        />
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="w-full flex font-Outfit font-semibold text-md justify-center md:justify-start">
            Email address
          </div>
          <div className="w-full flex flex-row p-[8px_12px] rounded-md items-center bg-white border-[1px] border-stone-200 mt-2">
            <input
              {...register("email")}
              className="rounded-xl outline-none pl-[16px] font-Outfit font-[300px] text-[16px] w-full placeholder-stone-250"
              placeholder="e.g. johndoe@kompass.ai"
              disabled={isLoading || isGoogleAuth}
            />
          </div>
          {errors.email && (
            <p className="error-text text-red-600">
              {errors.email.message?.toString()}
            </p>
          )}
          <div className="w-full flex font-Outfit font-semibold text-md justify-center md:justify-start mt-4">
            Your full name
          </div>
          <div className="w-full flex flex-row p-[8px_12px] rounded-md items-center bg-white border-[1px] border-stone-200 mt-2">
            <input
              {...register("userName")}
              className="rounded-xl outline-none pl-[16px] font-Outfit font-[300px] text-[16px] w-full placeholder-stone-250"
              placeholder="e.g. John Doe"
              disabled={isLoading || isGoogleAuth}
            />
          </div>
          {errors.userName && (
            <p className="error-text text-red-600">
              {errors.userName.message?.toString()}
            </p>
          )}
          <div className="w-full flex font-Outfit font-semibold text-md justify-center md:justify-start mt-4">
            Company name
          </div>
          <div className="w-full flex flex-row p-[8px_12px] rounded-md items-center bg-white border-[1px] border-stone-200 mt-2">
            <input
              // onChange={(e) => {
              //   setCompanyName(e.target.value);
              // }}
              {...register("companyName")}
              className="rounded-xl outline-none pl-[16px] font-Outfit font-[300px] text-[16px] w-full placeholder-stone-250"
              placeholder="e.g. KompassAI"
              disabled={isLoading}
            />
          </div>
          {errors.companyName && (
            <p className="error-text text-red-600">
              {errors.companyName.message?.toString()}
            </p>
          )}
          <div className="w-full flex font-Outfit font-semibold text-md justify-center md:justify-start mt-4">
            Phone number
          </div>
          <div className="w-full flex flex-row p-[8px_12px] rounded-md items-center bg-white border-[1px] border-stone-200 mt-2">
            {/* <input className='w-full rounded-xl outline-none pl-[16px] font-Outfit font-[300px] text-[16px]' placeholder='(00) 000 00 00' /> */}
            <PhoneInput
              className="rounded-xl outline-none pl-[16px] font-Outfit font-[300px] text-[16px] w-full placeholder-stone-250"
              placeholder="Enter phone number"
              // {...register("mobile")}
              value={mobile}
              onChange={setMobile}
              disabled={isLoading}
            />
          </div>
          {/* {errors.mobile && <p className="error-text text-red-600">{errors.mobile.message?.toString()}</p>} */}

          {isGoogleAuth === false ? (
            <>
              <div className="w-full flex font-Outfit font-semibold text-md justify-center md:justify-start mt-4">
                Choose a password
              </div>
              <div className="w-full flex flex-row p-[8px_12px] rounded-md items-center bg-white border-[1px] border-stone-200 mt-2">
                <input
                  // onChange={(e) => {
                  //   setPassword(e.target.value);
                  // }}
                  {...register("password")}
                  type={!showPassword ? "password" : "text"}
                  className="rounded-xl outline-none pl-[16px] font-Outfit font-[300px] text-[16px] w-full placeholder-stone-250"
                  placeholder=""
                  disabled={isLoading}
                />
                <span
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  <HidePassword fill={showPassword ? "#E7436A" : "#929292"} />
                </span>
              </div>
              {errors.password && (
                <p className="error-text text-red-600">
                  {errors.password.message?.toString()}
                </p>
              )}

              <div className="w-full flex font-Outfit font-semibold text-md justify-center md:justify-start mt-4">
                Confirm your password
              </div>
              <div className="w-full flex flex-row p-[8px_12px] rounded-md items-center bg-white border-[1px] border-stone-200 mt-2">
                <input
                  // onChange={(e) => {
                  //   setPassword(e.target.value);
                  // }}
                  {...register("confirmPassword")}
                  type={!showPassword ? "password" : "text"}
                  className="rounded-xl outline-none pl-[16px] font-Outfit font-[300px] text-[16px] w-full placeholder-stone-250"
                  placeholder=""
                  disabled={isLoading}
                />
              </div>
              {errors.confirmPassword && (
                <p className="error-text text-red-600">
                  {errors.confirmPassword.message?.toString()}
                </p>
              )}
            </>
          ) : null}
          <div className="w-full flex flex-row p-[8px_12px] rounded-[40px] items-center justify-center bg-white border-none border-[#E8E7E7] mt-2">
            <ReCAPTCHA
              sitekey={KOMPASSAI_RECAPTCHA_SITE_KEY}
              ref={captchaRef}
              Size="Compact"
            />
          </div>
          <Button
            type="submit"
            className="w-full h-[48px] flex items-center justify-center bg-blue-500 disabled:bg-[#929292] px-[24px] text-md text-white font-Outfit font-semibold rounded-md mt-6"
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress
                size="1.2rem"
                className="mr-2"
                style={{ color: "white" }}
              />
            ) : null}
            GET STARTED
          </Button>
        </form>
        <div className="w-full flex justify-center text-[#8B9E9F] font-Outfit font-md mt-8">
          Or sign up with your work email
        </div>
        <Button
          onClick={googleSignup}
          className="w-full h-[48px] flex items-center justify-center text-md bg-white border-[1px] border-blue-500 text-blue-500 font-Outfit uppercase rounded-md mt-2 gap-3"
        >
          <img className="w-[20px] h-[20px]" src={GoogleIcon} />
          <div>Signup via Google</div>
        </Button>
        <div className="w-full flex justify-center font-Outfit text-md text-[#8B9E9F] mt-8">
          Already have an account?
          <span
            onClick={gotoSignin}
            className="text-blue-500 cursor-pointer select-none ml-1"
          >
            Sign in
          </span>
        </div>
      </div>

      <div className="w-full text-center font-Outfit text-md text-[#8B9E9F] mt-8">
        By creating an account, I agree to the{" "}
        <span className="text-blue-500 cursor-pointer select-none">
          Terms of service
        </span>{" "}
        and{" "}
        <span className="text-blue-500 cursor-pointer select-none">
          Privacy policy
        </span>
        . I also agree to receive emails and communication relating to KompassAI
        services and offers.
      </div>

    </AuthLayout>
  );
}
