import * as env from "@/env";
import useAuth from "@/hooks/useAuth";

import { CONTACT_LIST_TYPE } from "@/utils/constants";

const useTeam = () => {
  const { getAuthToken } = useAuth();

  const inviteMembers = async () => {
    console.log("===============getContactList===============");
    // console.log(`params: ${JSON.stringify(params)}`);
    let response = null;
    const authToken = await getAuthToken();
    try {
      const _resData = await fetch(
        `${env.KOMPASSAI_BACKEND_ENDPOINT}/list?listType=${CONTACT_LIST_TYPE.KOMPASS_SEARCH}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

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
        message: e.message || "Something went wrong !",
      };
    }
    return response;
  };

  const getInvitations = async () => {
    console.log("===============getInvitations===============");

    let response = null;
    const authToken = await getAuthToken();
    try {
      const _resData = await fetch(
        `${env.KOMPASSAI_BACKEND_ENDPOINT}/getInvitations`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

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
        message: e.message || "Something went wrong !",
      };
    }
    return response;
  };

  const getTeamMembers = async ({
    searchValue = "",
    filterRole = "",
    sort = {
      sort: -1,
      sortBy: "email",
    },
  }) => {
    console.log("===============getTeamMembers===============");

    let response = null;
    const authToken = await getAuthToken();

    let url = `${env.KOMPASSAI_BACKEND_ENDPOINT}/getTeamMembers?`;

    if (searchValue) {
      url += `searchValue=${searchValue}&`;
    }

    if (filterRole) {
      url += `filterRole=${filterRole}&`;
    }

    if (sort) {
      url += `sort=${sort.sort}&sortBy=${sort.sortBy}`;
    }


    try {
      const _resData = await fetch(
        url,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

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
        message: e.message || "Something went wrong !",
      };
    }
    return response;
  };

  const updateTeamMember = async (params) => {
    const { creditsMonthly, creditsAnnual, role, id } = params;
    let response = null;
    const authToken = await getAuthToken();
    try {
      const _resData = await fetch(
        `${env.KOMPASSAI_BACKEND_ENDPOINT}/updateMember`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            creditsMonthly,
            creditsAnnual,
            role,
            id,
          }),
        }
      );

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
        message: e.message || "Something went wrong !",
      };
    }
    return response;
  };

  const acceptInvitation = async (params) => {
    const { id } = params;
    let response = null;
    const authToken = await getAuthToken();
    try {
      const _resData = await fetch(
        `${env.KOMPASSAI_BACKEND_ENDPOINT}/acceptInvitation`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        }
      );

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
        message: e.message || "Something went wrong !",
      };
    }
    return response;
  };

  // Reject Invitation
  const rejectInvitation = async (params) => {
    const { id } = params;
    let response = null;
    const authToken = await getAuthToken();
    try {
      const _resData = await fetch(
        `${env.KOMPASSAI_BACKEND_ENDPOINT}/rejectInvitation`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        }
      );

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
        message: e.message || "Something went wrong !",
      };
    }
    return response;
  };

  const getInvitationsCount = async (params) => {
    let response = null;
    const authToken = await getAuthToken();
    try {
      const _resData = await fetch(
        `${env.KOMPASSAI_BACKEND_ENDPOINT}/getInvitationsCount`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

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
        message: e.message || "Something went wrong !",
      };
    }
    return response;
  };

  return {
    inviteMembers,
    updateTeamMember,
    getTeamMembers,
    getInvitations,
    acceptInvitation,
    getInvitationsCount,
    rejectInvitation
  };
};

export default useTeam;
