// require('dotenv').config()

// KOMPASSAI_BACKEND_ENDPOINT = process.env.KOMPASSAI_BACKEND_ENDPOINT;
const KOMPASSAI_BACKEND_ENDPOINT = 'https://7zv6gzl1oe.execute-api.ca-central-1.amazonaws.com/default';

const useApiEndPoints = () => {

    const postLivesearchContactByFilters = async (params) => {

        console.log('===============postLivesearchContactByFilters===============');
        console.log(`params: ${JSON.stringify(params)}`);
        let response = null;
        try {
            const _resData = await fetch(`${KOMPASSAI_BACKEND_ENDPOINT}/livesearch_contacts`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
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
        postLivesearchContactByFilters
    };
};

export default useApiEndPoints;
