import * as env from '@/env';
import useAuth from '@/hooks/useAuth';

import { CONTACT_LIST_TYPE } from '@/utils/constants';

const useList = () => {

    const { getAuthToken } = useAuth();

    const getContactList = async () => {
        console.log('===============getContactList===============');
        // console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/list?listType=${CONTACT_LIST_TYPE.KOMPASS_SEARCH}`, {
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

    const createContactList = async (params) => {
        console.log('===============createContactList===============');
        // console.log(`params: ${JSON.stringify(params)}`);
        const { listTitle, listType } = params;
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/list`, {
                method: "PUT",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ listTitle, listType })
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

    const getProfilesByContactId = async (params) => {
        const { contactId } = params;
        console.log('===============getProfilesByContactId===============');
        // console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/list/${contactId}`, {
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

    const deleteContactList = async (params) => {
        const { ids } = params;
        console.log('===============deleteContactList===============');
        // console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/list`, {
                method: "DELETE",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ ids })
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

    const deleteProfiles = async (params) => {
        const { listId, ids } = params;
        console.log('===============deleteProfiles===============');
        // console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/list/${listId}`, {
                method: "DELETE",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ ids })
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
        getContactList,
        createContactList,
        getProfilesByContactId,
        deleteContactList,
        deleteProfiles,
    };
};

export default useList;
