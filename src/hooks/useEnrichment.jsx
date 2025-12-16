import * as env from '@/env';
import useAuth from '@/hooks/useAuth';

const useEnrichment = () => {

    const { getAuthToken } = useAuth();

    const postKompassSearchEmailEnrich = async (params) => {
        console.log('===============postKompassSearchEmailEnrich===============');
        console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/kompass_search/enrich/email`, {
                method: "POST",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
                body: JSON.stringify(params)
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

    const postKompassSearchPhoneEnrich = async (params) => {
        console.log('===============postKompassSearchPhoneEnrich===============');
        console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/kompass_search/enrich/phone`, {
                method: "POST",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
                body: JSON.stringify(params)
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

    const postKompassSearchAllEnrich = async (params) => {
        console.log('===============postKompassSearchAllEnrich===============');
        console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/kompass_search/enrich/all`, {
                method: "POST",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
                body: JSON.stringify(params)
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
        postKompassSearchEmailEnrich, postKompassSearchPhoneEnrich, postKompassSearchAllEnrich,
    };
};

export default useEnrichment;
