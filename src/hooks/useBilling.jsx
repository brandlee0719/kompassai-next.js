import * as cognito from "@/libs/cognito";
import * as Env from "@/env";

const useBilling = () => {
  async function getSession() {
    try {
      const session = await cognito.getSession();
      return session;
    } catch (err) {
      throw err;
    }
  }

  const getAuthToken = async () => {
    const session = await getSession();
    return session.idToken?.jwtToken || null;
  };

  const getSubscriptionInfo = async () => {
    console.log("===============getSubscriptionInfo===============");

    let response = null;
    const authToken = await getAuthToken();

    try {
      const _resData = await fetch(
        `${Env.KOMPASSAI_BACKEND_ENDPOINT}/billing/getSubscriptionInfo`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      );

      if (_resData.status) {
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
  };

  const getCustomCreditsInfo = async () => {
    console.log("===============getCustomCreditsInfo===============");

    let response = null;
    try {
      const params = new URLSearchParams();
      params.set("mode", "customize_credits");
      const _resData = await fetch(
        `${Env.KOMPASSAI_BACKEND_ENDPOINT}/billing/getTariffs?` + params,
        {
          method: "GET",
        },
      );

      if (_resData.status) {
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
  };

  const getCustomOTP = async () => {
    console.log("===============getCustomOTP===============");

    let response = null;
    try {
      const params = new URLSearchParams();
      params.set("mode", "payment");
      const _resData = await fetch(
        `${Env.KOMPASSAI_BACKEND_ENDPOINT}/billing/getTariffs?` + params,
        {
          method: "GET",
        },
      );

      if (_resData.status) {
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
  };

  const getTariffs = async () => {
    console.log("===============getTariffs===============");

    let response = null;
    try {
      const _resData = await fetch(
        `${Env.KOMPASSAI_BACKEND_ENDPOINT}/billing/getTariffs`,
        {
          method: "GET",
        },
      );

      if (_resData.status) {
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
  };

  const getBillingHistory = async () => {
    console.log("===============getBillingHistory===============");

    const authToken = await getAuthToken();
    let response = null;
    try {
      const _resData = await fetch(
        `${Env.KOMPASSAI_BACKEND_ENDPOINT}/billing/getBillingHistory`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      );

      if (_resData.status) {
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
  };

  return {
    getSubscriptionInfo,
    getCustomCreditsInfo,
    getTariffs,
    getBillingHistory,
    getCustomOTP,
  };
};

export default useBilling;
