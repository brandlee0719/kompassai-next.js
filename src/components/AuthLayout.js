import React, { useState, useRef, useEffect, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { ReactComponent as IsoGraphic } from "@/assets/image/isometric_login.svg";
import Logos from "@/assets/image/logo_collection.png";

import useKompassRouter from "@/hooks/useKompassRouter";

function AuthLayout({ children }) {
  const authContext = useContext(AuthContext);
  const { kompassNavigate } = useKompassRouter();

  useEffect(() => {
    const func = async () => {
      if (await authContext.isSignIn()) {
        kompassNavigate("/home");
      }
    };

    func();
  }, []);

  return (
    <main className="flex min-h-screen w-full text-gray-900">
      <div className="max-w-1/2 flex-1 bg-white">
        <div className="mb-20 flex items-center justify-center">
          <div className="mt-20 w-8/12">{children}</div>
        </div>
      </div>
      <div className="min-h-screen max-w-1/2 flex-1 bg-bluegrey-100">
        <div className="mb-20 flex h-screen items-center justify-center">
          <div className="w-8/12">
            <IsoGraphic className="mb-9 w-full" />
            <div className="font-OutfitLight text-center text-xl text-stone-600">
              Quickly build{" "}
              <span className="font-OutfitMedium">
                internal tools and dashboards
              </span>
              , using your team’s own{" "}
              <span className="font-OutfitMedium">data and integrations.</span>
            </div>
            <div className="font-OutfitMedium mt-8 text-center text-sm uppercase text-stone-300">
              Trusted by teams at
            </div>
            <div className="mt-4 flex items-center justify-center">
              <img src={Logos} className="w-9/12" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;
