import * as env from '@/env';
import useAuth from '@/hooks/useAuth';

import { CONTACT_LIST_TYPE } from '@/utils/constants';

const useBulk = () => {

    const { getAuthToken } = useAuth();

    const bulkEnrichByLinkedin = async (params) => {
        console.log('===============bulkEnrichByLinkedin===============');
        const { inputs } = params;
        const authToken = await getAuthToken();
        try {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", `${env.KOMPASSAI_BACKEND_ENDPOINT}/bulk/linkedin`, true);
            xhr.setRequestHeader('Authorization', `Bearer ${authToken}`);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(params));
        } catch (e) {
            console.log(e);
        }
    }

    const bulkEnrichBySearch = async (params) => {
        console.log('===============bulkEnrichBySearch===============');
        const authToken = await getAuthToken();
        try {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", `${env.KOMPASSAI_BACKEND_ENDPOINT}/bulk/search`, true);
            xhr.setRequestHeader('Authorization', `Bearer ${authToken}`);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(params));
        } catch (e) {
            console.log(e);
        }
    }

    const bulkEnrichResults = async () => {
        console.log('===============bulkEnrichResult===============');
        // console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/bulk/result`, {
                method: "GET",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
            });

            if (_resData.ok) {
                const data = await _resData.json();
                response = data;
            } else {
                throw new Error("Something went wrong !");
            }
        } catch (e) {
            console.log(e);
            response = {
                status: false,
                message: e.message || 'Something went wrong !'
            }
        }
        return response;
    }

    const bulkEnrichResultItem = async (itemId) => {
        console.log('===============bulkEnrichResultItem===============');
        // console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/bulk/result/${itemId}`, {
                method: "GET",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
            });

            if (_resData.ok) {
                const data = await _resData.json();
                response = data;
            } else {
                throw new Error("Something went wrong !");
            }
        } catch (e) {
            console.log(e);
            response = {
                status: false,
                message: e.message || 'Something went wrong !'
            }
        }
        return response;
    }

    const bulkEnrichOutputs = async (itemId) => {
        console.log('===============bulkEnrichOutputs===============');
        // console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/bulk/result/${itemId}`, {
                method: "POST",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
            });

            if (_resData.ok) {
                const data = await _resData.json();
                response = data;
            } else {
                throw new Error("Something went wrong !");
            }
        } catch (e) {
            console.log(e);
            response = {
                status: false,
                message: e.message || 'Something went wrong !'
            }
        }
        return response;
    }

    const bulkEnrichDeleteResult = async (itemId) => {
        console.log('===============bulkEnrichDeleteResult===============');
        // console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/bulk/result/${itemId}`, {
                method: "DELETE",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
            });

            if (_resData.ok) {
                const data = await _resData.json();
                response = data;
            } else {
                throw new Error("Something went wrong !");
            }
        } catch (e) {
            console.log(e);
            response = {
                status: false,
                message: e.message || 'Something went wrong !'
            }
        }
        return response;
    }

    return {
        bulkEnrichBySearch,
        bulkEnrichByLinkedin,
        bulkEnrichResults,
        bulkEnrichResultItem,
        bulkEnrichOutputs,
        bulkEnrichDeleteResult,
    };
};

export default useBulk;
