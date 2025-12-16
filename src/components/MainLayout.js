import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "@/context/AuthContext";

import MainHeader from "../components/MainHeader";
import LandingFooter from "../components/LandingFooter";
import ProfilePopup from "./popup/ProfilePopup";
import GuidePopup from "./popup/GuidePopup";
import BaseContainer from "@/components/BaseContainer";
import LogoutDialog from "@/components/LogoutDialog";
import MainLayoutSpinner from "./MainLayoutSpinner";

import useKompassRouter from "@/hooks/useKompassRouter";
import PaymentResultModal from "./payment/PaymentResultModal";

const MainLayout = ({
  children,
  loading = false,
  baseContainerWidth = 1920,
}) => {
  const { kompassNavigate } = useKompassRouter();
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  const [bSignin, handleSignin] = useState(false);

  const [profilePopupAnchorEl, setProfilePopupAnchorEl] = useState(null);
  const [guidePopupAnchorEl, setGuidePopupAnchorEl] = useState(null);
  const [contentMinHeight, setContentMinHeight] = useState(0);
  const [visibleLogout, setVisibleLogout] = useState(false);

  const profilePopupClosed = () => {
    setProfilePopupAnchorEl(null);
  };

  const guidePopupClosed = () => {
    setGuidePopupAnchorEl(null);
  };

  const getHeight = () => {
    return (
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    );
  };

  const resized = () => {
    setContentMinHeight(getHeight() - 100);
  };

  useEffect(() => {
    window.addEventListener("resize", resized);
    resized();
  }, []);

  useEffect(() => {
    const func = async () => {
      if (!(await authContext.isSignIn())) {
        authContext.signOut();
        handleSignin(false);
      } else {
        handleSignin(true);
      }
    };

    func();
  }, []);

  return bSignin ? (
    <>
    <PaymentResultModal></PaymentResultModal>
      <main className="relative m-auto min-h-screen w-full overflow-hidden bg-white">
        {loading ? <MainLayoutSpinner /> : null}
        <MainHeader
          showProfilePopup={setProfilePopupAnchorEl}
          showGuidePopup={setGuidePopupAnchorEl}
          baseContainerWidth={baseContainerWidth}
        />
        <ProfilePopup
          anchorEl={profilePopupAnchorEl}
          handleClose={profilePopupClosed}
          handleLogout={() => {
            setVisibleLogout(true);
          }}
        />
        <GuidePopup
          anchorEl={guidePopupAnchorEl}
          handleClose={guidePopupClosed}
        />
        <LogoutDialog
          open={visibleLogout}
          handleClose={() => {
            setVisibleLogout(false);
          }}
          handleLogout={() => {
            authContext.signOut();
          }}
        />
        <BaseContainer width={baseContainerWidth}>
          <div
            className={`flex flex-col bg-white`}
            style={{ minHeight: `${contentMinHeight}px` }}
          >
            {children}
          </div>
        </BaseContainer>
      </main>
    </>
  ) : (
    <>
      <main className="relative m-auto min-h-screen w-full overflow-hidden bg-gray-950">
        <MainLayoutSpinner />
      </main>
    </>
  );
};

export default MainLayout;
