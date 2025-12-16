import * as env from '@/env';
import useAuth from '@/hooks/useAuth';

const useProxycurl = () => {

    const { getAuthToken } = useAuth();

    const getCompanyPicture = async (linkedinUrl) => {
        if(!linkedinUrl) return null;

        console.log('===============getCompanyPicture===============');
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/profile_picture/company`, {
                method: "POST",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({linkedin_company_profile_url: linkedinUrl})
            });

            if (_resData.ok) {
                const data = await _resData.json();
                if(data?.status == true && data?.data?.response?.tmp_profile_pic_url) {
                    return data.data.response.tmp_profile_pic_url;
                } else {
                    throw new Error("Something went wrong !");    
                }
            } else {
                throw new Error("Something went wrong !");
            }
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    const getPersonPicture = async (linkedinUrl) => {
        if(!linkedinUrl) return null;

        console.log('===============getPersonPicture===============');
        let response = null;
        const authToken = await getAuthToken();
        try {
            const _resData = await fetch(`${env.KOMPASSAI_BACKEND_ENDPOINT}/profile_picture/person`, {
                method: "POST",
                headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({linkedin_person_profile_url: linkedinUrl})
            });

            if (_resData.ok) {
                const data = await _resData.json();
                if(data?.status == true && data?.data?.response?.tmp_profile_pic_url) {
                    return data.data.response.tmp_profile_pic_url;
                } else {
                    throw new Error("Something went wrong !");    
                }
            } else {
                throw new Error("Something went wrong !");
            }
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    return {
        getCompanyPicture,
        getPersonPicture
    };
};

export default useProxycurl;
