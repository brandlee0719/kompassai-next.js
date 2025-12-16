import * as env from '@/env';
import useAuth from '@/hooks/useAuth';

const useKompassSearch = () => {

    const { getAuthToken } = useAuth();

    const postKompassSearchContactsByFilters = async (params) => {
        console.log('===============postKompasssearchContactByFilters===============');
        console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/kompass_search/contacts`, {
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

    const postKompassSearchCompaniesByFilters = async (params) => {

        console.log('===============postAdaptSearchCompaniesByFilter===============');
        console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/kompass_search/company`, {
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

    const getKompassSearchFavorite = async (params) => {
        console.log('===============getKompassSearchFavorite===============');
        console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/kompass_search/favorite`, {
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

    const postKompassSearchFavorite = async (params) => {
        console.log('===============postKompassSearchFavorite===============');
        console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/kompass_search/favorite`, {
                method: "POST",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
                body: JSON.stringify(params)
            });

            response = await _resData.json();
            if (!response?.status) {
                throw new Error(response?.message);
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

    const deleteKompassSearchFavorite = async (params) => {
        console.log('===============deleteKompassSearchFavorite===============');
        console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/kompass_search/favorite`, {
                method: "DELETE",
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

    const postSaveKompassSearchContacts = async (params) => {
        console.log('===============postSaveKompassSearchContacts===============');
        console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/kompass_search/save/`, {
                method: "POST",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
                body: JSON.stringify(params)
            });
            response = await _resData.json();
            if (!_resData.ok) throw new Error(response?.message);
        } catch (e) {
            response = {
                status: false,
                message: e.message || 'Something went wrong !'
            }
        }
        return response;
    }

    const postKompassSearchNameOrDomain = async (params) => {
        console.log('===============postKompassSearchNameOrDomain===============');
        console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/kompass_search/company/nameOrDomain`, {
                method: "POST",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
                body: JSON.stringify(params)
            });

            response = await _resData.json();
            if (!response?.status) {
                throw new Error(response?.message);
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
        postKompassSearchContactsByFilters,
        postKompassSearchCompaniesByFilters,
        getKompassSearchFavorite,
        postKompassSearchFavorite,
        deleteKompassSearchFavorite,
        postSaveKompassSearchContacts,
        postKompassSearchNameOrDomain,
    };
};

export default useKompassSearch;
