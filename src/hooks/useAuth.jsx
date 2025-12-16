import { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as cognito from "@/libs/cognito";
import { AuthContext } from "@/context/AuthContext";
import useLocalStorage from "@/hooks/useLocalStorage";

import * as Env from '@/env';
import { debug } from "util";

import useKompassRouter from '@/hooks/useKompassRouter';

const useAuth = () => {

    const { kompassNavigate } = useKompassRouter();

    // const postSignUp = async (params) => {

    //     console.log('===============postSignUp===============');
    //     console.log(`params: ${JSON.stringify(params)}`);
    //     let response = null;
    //     try {
    //         const _resData = await fetch(`${Env.KOMPASSAI_BACKEND_ENDPOINT}/signup`, {
    //             method: "POST",
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(params)
    //         });

    //         if (_resData.ok) {
    //             const data = await _resData.json();
    //             response = data;
    //         } else {
    //             throw new Error("Something went wrong !");
    //         }
    //     } catch (e) {
    //         console.log(e);
    //         response = {
    //             status: false,
    //             message: e.message || 'Something went wrong !'
    //         }
    //     }
    //     return response;
    // }

    async function getSession() {
        try {
            const session = await cognito.getSession();
            return session;
        } catch (err) {
            throw err;
        }
    }

    const getUserInfo = async () => {
        console.log('===============getUserInfo===============');

        const authToken = await getAuthToken();
        let response = null;
        try {
            const _resData = await fetch(`${Env.KOMPASSAI_BACKEND_ENDPOINT}/getUserInfo`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            if (_resData.ok) {
                const data = await _resData.json();
                response = data.data;
            } else {
                throw new Error("Something went wrong !");
            }
        } catch (e) {
            console.log(e);
            throw new Error("Something went wrong !");
        }
        return response;
    }

    const resetPassword = async (email, password) => {
        console.log('===============resetPassword===============');

        let response = null;
        try {
            const _resData = await fetch(`${Env.KOMPASSAI_BACKEND_ENDPOINT}/resetPassword`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, password: password })
            });

            if (_resData.ok) {
                const data = await _resData.json();
                response = data.data;
            } else {
                throw new Error("Something went wrong !");
            }
        } catch (e) {
            console.log(e);
            throw new Error("Something went wrong !");
        }
        return response;
    }

    const getAuthToken = async () => {
        try {
            const session = await getSession();
            return (session.idToken?.jwtToken || null);
        } catch (error) {
            cognito.signOut();
            kompassNavigate("/signin");
            return null;
        }
    }

    return {
        getSession,
        getAuthToken,
        getUserInfo,
        resetPassword,
    };
};

export default useAuth;
