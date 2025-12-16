import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
import ReCAPTCHA from "react-google-recaptcha";
import { KOMPASSAI_RECAPTCHA_SITE_KEY } from "@/env";

import { AuthContext } from "@/context/AuthContext";
import AuthLayout from "@/components/AuthLayout";
import useAuth from "@/hooks/useAuth";

import { ReactComponent as Logo } from "@/assets/image/icons/logo.svg";
import CheckBoxIcon from "@/assets/image/icons/checkbox_data.svg";
import GoogleIcon from "@/assets/image/icons/google.svg";
import Text from "@/components/Text";

import { KompassColor } from "@/theme/color";

import { COGNITO_GOOGLE_DEFAULT_PASSWORD } from '@/utils/constants'
import { forgotPassword } from "@/libs/cognito";

import useKompassRouter from '@/hooks/useKompassRouter';

export default function SignIn() {
  const { kompassNavigate } = useKompassRouter();

  const authContext = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const captchaRef = useRef(null)

  const [isLogging, setIsLogging] = useState(false);
  const [isGoogleAuth, setIsGoogleAuth] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const forgotPassword = async () => {
    try {
      // await authContext.sendCode(email);
      // toast.info(`Just sent an verification code to ${email}.`, { theme: "colored" })
      await authContext.setUserInfo({ email });
      kompassNavigate("/reset");
    } catch (err) {
      toast.error(err.message, { theme: "colored" })
    }
  };
  const gotoSignUp = () => {
    kompassNavigate("/signup");
  };

  const isEmail = (input) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(input);
  };

  const signIn = async () => {

    setErrorMessage(null);
    const captchaToken = await captchaRef.current.executeAsync();

    try {
      setIsLogging(true);
      setIsGoogleAuth(true);
      await authContext.signInWithEmail(email, password, captchaToken ? {
        captcha: captchaToken
      } : null);
      setIsLogging(false);

      // gotoHome();

    } catch (err) {
      setIsLogging(false);
      console.log(err);
      if (err instanceof Error) {
        if (err.message.includes('PreAuthentication failed with error Recaptcha verification failed.')) {
          // toast.error('Recaptcha verification failed', { theme: "colored" })
          setErrorMessage('Recaptcha verification failed');
        } else if (err.message.includes('Missing Captcha Value')) {
          // toast.error('Missing Captcha Value', { theme: "colored" })
          setErrorMessage('Missing Captcha Value');
        } else if (err.message.includes("User doesn't exist")) {
          // toast.error("User doesn't exist", { theme: "colored" })
          setErrorMessage("User doesn't exist");
        } else {
          // toast.error(err.message, { theme: "colored" })
          setErrorMessage(err.message);
        }
        captchaRef.current.reset();
      }
    }
  }

  const googleSignin = useGoogleLogin({
    onSuccess: async (codeResponse) => {

      setErrorMessage(null);
      const captchaToken = await captchaRef.current.executeAsync();

      try {
        setIsLogging(true);
        setIsGoogleAuth(true);
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`, {
          method: "GET",
          headers: { Authorization: `Bearer  ${codeResponse.access_token}`, Accept: "application/json", },
        })
        const _resData = await response.json();
        await authContext.signInWithEmail(_resData.email, COGNITO_GOOGLE_DEFAULT_PASSWORD, captchaToken ? {
          captcha: captchaToken
        } : null);
        setIsLogging(false);

        // gotoHome();
      } catch (err) {
        setIsLogging(false);
        setIsGoogleAuth(false);
        if (err instanceof Error) {
          if (err.message.includes('PreAuthentication failed with error Recaptcha verification failed.')) {
            // toast.error('Recaptcha verification failed', { theme: "colored" })
            setErrorMessage('Recaptcha verification failed');
          } else if (err.message.includes('Missing Captcha Value')) {
            // toast.error('Missing Captcha Value', { theme: "colored" })
            setErrorMessage('Missing Captcha Value');
          } else if (err.message.includes("User doesn't exist")) {
            // toast.error("User doesn't exist", { theme: "colored" })
            setErrorMessage("User doesn't exist");
          } else {
            // toast.error(err.message, { theme: "colored" })
            setErrorMessage(err.message);
          }
          captchaRef.current.reset();
        }
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <AuthLayout>
      <Logo className="w-[185px] fill-current text-gray-900 mb-9" />

      <Text variant="Header4" className="font-OutfitBold text-1xl">
        Welcome back
      </Text>
      <div className="font-Outfit text-md md:text-md">
        Thanks for being a part of our community!
      </div>

      <hr
        className="h-px my-5 border-0 dark:bg-stone-250"
      />
      <div className="w-full flex font-Outfit font-semibold text-md justify-center md:justify-start">
        Email address
      </div>
      <div className="w-full flex flex-row p-[8px_12px] rounded-md items-center bg-white border-[1px] border-stone-200 mt-2">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl outline-none pl-[16px] font-Outfit font-[300px] text-[16px] w-full placeholder-stone-250"
          placeholder="e.g. johndoe@kompass.ai"
          disabled={isLogging ? true : false}
        />
      </div>
      <div className="w-full flex font-Outfit mt-5 font-semibold text-md justify-center md:justify-start">
        Password
      </div>
      <div className="w-full flex flex-row p-[8px_12px] rounded-md items-center bg-white border-[1px] border-stone-250 mt-2">
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-xl outline-none pl-[16px] font-Outfit font-[300px] text-[16px] w-full"
          type="password"
          disabled={isLogging ? true : false}
        />
      </div>
      <div
        onClick={forgotPassword}
        className="w-full flex text-blue-500 cursor-pointer select-none font-Outfit text-md justify-center md:justify-end mt-2"
      >
        Forgot your password?
      </div>
      <div className="w-full flex flex-row justify-center items-center mt-2">
        <ReCAPTCHA
          sitekey={KOMPASSAI_RECAPTCHA_SITE_KEY}
          size="invisible"
          ref={captchaRef}
        />
      </div>
      {errorMessage && <p className="error-text text-red-600">{errorMessage}</p>}
      <Button
        disabled={(!isEmail(email) || (isLogging ? true : false))}
        onClick={signIn}
        className="w-full h-[48px] flex items-center justify-center bg-gray-900 disabled:bg-gray-850 px-[24px] text-md text-white font-Outfit font-semibold rounded-md mt-6"
      >
        {
          isLogging ? <CircularProgress size='1.2rem' className="mr-2" style={{ 'color': 'white' }} /> : null
        }
        SIGN IN
      </Button>


      <div className="w-full flex justify-center text-[#8B9E9F] font-Outfit text-md mt-12">
        Or sign in with your work email
      </div>

      <Button onClick={googleSignin} className="w-full h-[48px] flex items-center justify-center px-[24px] text-md bg-white border-[1px] border-blue-500 text-blue-500 font-Outfit uppercase rounded-md mt-2 gap-3">
        {
          (isLogging && isGoogleAuth) ? <CircularProgress size='1.2rem' className="mr-2" style={{ 'color': KompassColor['main']['A700'] }} /> : null
        }
        <img className="w-[20px] h-[20px]" src={GoogleIcon} />
        <div>Login via Google</div>
      </Button>
      <div className="w-full flex justify-center font-Outfit text-md text-[#8B9E9F] mt-8">
        You’re new here?
        <span
          onClick={gotoSignUp}
          className="text-blue-500 cursor-pointer select-none ml-1"
        >
          Create an account
        </span>
      </div>
      <div className="w-full text-center font-Outfit text-md text-[#8B9E9F] mt-5">
        By logging in, I agree to the{" "}
        <span className="text-blue-500 cursor-pointer select-none">
          Terms of service
        </span>{" "}
        and{" "}
        <span className="text-blue-500 cursor-pointer select-none">
          Privacy policy
        </span>
        . I also agree to receive emails and communication relating to
        KompassAI services and offers.
      </div>

    </AuthLayout>
  );
}
