import React, { useState, useEffect, useContext } from "react";
import * as cognito from "@/libs/cognito";
import useAuth from "@/hooks/useAuth";
import { useNavigate, useRoutes } from "react-router-dom";

import useKompassRouter from '@/hooks/useKompassRouter';
import useLocalStorage from '@/hooks/useLocalStorage';

import { STORAGE_KEY } from '@/utils/constants'


export const AuthStatus = {
  Loading: 0,
  SignedIn: 1,
  SignedOut: 2,
};

const defaultState = {
  userInfo: {},
  authStatus: AuthStatus.Loading,
};

export const AuthContext = React.createContext(defaultState);

export const AuthProvider = ({ children }) => {

  const [authStatus, setAuthStatus] = useState(AuthStatus.Loading);
  const [isLoading, setIsLoading] = useState(false);
  const { getSession, getUserInfo } = useAuth();
  const [userInfo, setUserInfo, updateUserInfo, removeUserInfo] = useLocalStorage(STORAGE_KEY.USER_INFO, null);

  const { kompassNavigate } = useKompassRouter();

  // useEffect(() => {
  //   async function getSessionInfo() {
  //     try {
  //       const session = await getSession();
  //       const attr = await getAttributes();
  //       setAttrInfo(attr);
  //       setAuthStatus(AuthStatus.SignedIn);
  //     } catch (err) {
  //       setAuthStatus(AuthStatus.SignedOut);
  //       setUserInfo({});
  //     }
  //   }
  //   getSessionInfo();
  // }, [setAuthStatus, authStatus]);

  // if (userInfo === null) {
  //   return null;
  // }

  async function signInWithEmail(email, password, validationData = null) {
    try {
      await cognito.signInWithEmail(email, password, validationData);
      await cognito.setAttribute({Name:'email', Value: email});
      const response = await getUserInfo();
      setUserInfo(response.userInfo);
      if(response.userInfo.isEmailVerified) {
        setAuthStatus(AuthStatus.SignedIn);
        kompassNavigate("/home");
      } else {
        await cognito.sendCode(response.userInfo.email);
        kompassNavigate("/verification");
      }
    } catch (err) {
      setUserInfo(null);
      setAuthStatus(AuthStatus.SignedOut);
      cognito.signOut();
      throw err;
    }
  }

  async function signUpWithEmail(email, password, data = [], validationData = []) {
    try {
      await cognito.signUpUserWithEmail(email, password, data, validationData);
      setUserInfo(data);
    } catch (err) {
      throw err;
    }
  }

  function signOut() {
    cognito.signOut();
    setAuthStatus(AuthStatus.SignedOut);
    setUserInfo(null);
    kompassNavigate("/signin");
  }

  // function setUserInfo(_userInfo) {

  // }

  // function getUserInfo() {

  // }

  async function verifyCode(email, code) {
    try {
      await cognito.verifyCode(email, code);
    } catch (err) {
      throw err;
    }
  }

  async function resendCode(email) {
    try {
      return await cognito.resendCode(email);
    } catch (err) {
      throw err;
    }
  }

  async function getAttributes() {
    try {
      const attr = await cognito.getAttributes();
      return attr;
    } catch (err) {
      throw err;
    }
  }

  async function setAttribute(attr) {
    try {
      const res = await cognito.setAttribute(attr);
      return res;
    } catch (err) {
      throw err;
    }
  }

  async function sendCode(email) {
    try {
      return await cognito.sendCode(email);
    } catch (err) {
      throw err;
    }
  }

  async function forgotPassword(email, code, password) {
    try {
      await cognito.forgotPassword(email, code, password);
    } catch (err) {
      throw err;
    }
  }

  async function changePassword(oldPassword, newPassword) { 
    try {
      await cognito.changePassword(oldPassword, newPassword);
    } catch (err) {
      throw err;
    }
  }

  async function checkSession() {
    try {
      await getSession();
      return true;
    } catch (error) {
      return false;
    }
  }

  const handleLoading = (status) => {
    setIsLoading(status);
  };

  const isSignIn = async () => {
    // return authStatus === AuthStatus.SignedIn;
    return await checkSession();
  }

  const state = {
    isLoading,
    handleLoading,
    isSignIn,

    userInfo,
    signUpWithEmail,
    signInWithEmail,
    signOut,
    verifyCode,
    resendCode,
    sendCode,
    forgotPassword,
    changePassword,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export const useAuthValues = () => useContext(AuthContext);
