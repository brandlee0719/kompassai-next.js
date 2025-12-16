import * as cognito from "@/libs/cognito";
import * as Env from "@/env";

const useStripe = () => {
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

  const getPaymentLink = async (items, quantity) => {
    console.log("===============getPaymentLink===============");

    const authToken = await getAuthToken();
    let response = null;

    let reworkedItems = items.map((item) => {
      return { ...item, quantity: quantity };
    });

    let requestBody = {
      mode: "subscription",
      ui_mode: true,
      items: reworkedItems,
    };

    // console.log(requestBody)
    // console.warn(quantity);
    // console.log(reworkedItems);
    try {
      const _resData = await fetch(
        `${Env.KOMPASSAI_BACKEND_ENDPOINT}/billing/getPaymentLink`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(requestBody),
        },
      );

      if (_resData.status) {
        const data = await _resData.json();
        response = data;
      } else {
        throw new Error("Something went wrong !");
      }
    } catch (e) {
      console.log(e);
      throw new Error("Something went wrong !");
    }
    return response;
  };

  const getCreditPaymentLink = async (items) => {
    console.log("===============getCreditPaymentLink===============");

    const authToken = await getAuthToken();
    let response = null;

    let requestBody = {
      mode: "payment",
      ui_mode: true,
      items: items,
    };

    try {
      const _resData = await fetch(
        `${Env.KOMPASSAI_BACKEND_ENDPOINT}/billing/getPaymentLink`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(requestBody),
        },
      );

      if (_resData.status) {
        const data = await _resData.json();
        response = data;
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
    getPaymentLink,
    getCreditPaymentLink,
  };
};

export default useStripe;
