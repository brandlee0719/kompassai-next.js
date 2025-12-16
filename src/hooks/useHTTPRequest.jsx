import * as env from "@/env";
import useAuth from "@/hooks/useAuth";
//not technically a hook just abstraction over fetch for React Query
export function useHTTPRequest(link, method = "GET", headers = {}) {
  const { getAuthToken } = useAuth();
  const asyncRequest = async (params = undefined) => {
    try {
      const authToken = await getAuthToken();
      const param = {
        method: method,

        // headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
        headers: {
          Authorization: `Bearer ${authToken}`,
          ...headers,
        },
      };
      if (params) {
        param.body = params;
      }
      const _resData = await fetch(
        env.KOMPASSAI_BACKEND_ENDPOINT + link,
        param,
      );
      if (_resData.ok) {
        const data = await _resData.json();
        return data;
      } else {
        throw new Error("Something went wrong!");
      }
    } catch (e) {
      console.log(e);
      const errorResponse = {
        status: false,
        message: e.message || "Something went wrong!",
      };
      throw errorResponse;
    }
  };
  return asyncRequest;
}
