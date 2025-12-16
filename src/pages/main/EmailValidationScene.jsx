import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Button, Select, Option } from "@material-tailwind/react";
import { toast } from "react-toastify";

import { pageContentWidth } from "@/utils/common";

import BaseContainer from "@/components/BaseContainer";
import MainLayout from "@/components/MainLayout";

import EmailValidationResultsTable from "@/components/email_validation/EmailValidationResultsTable";
import EmailsUploadWidget from "@/components/email_validation/EmailUploadWidget";
import SingleEmailValidation from "@/components/email_validation/SingleEmailValidation";
import EmailUploadWidget from "@/components/email_validation/EmailUploadWidget";

export default function EmailValidationScene() {
  const [loading, setLoading] = useState(false);
  
  const [currentWidgetIndex, setCurrentWidgetIndex] = useState(0);

  return (
    <MainLayout loading={loading} baseContainerWidth={0}>
      {currentWidgetIndex == 0 ? (
        <>
          <div className="align-center leading-0 flex h-[82px] w-full py-[25px] pl-[70px] shadow-[0_1px_14px_0_rgba(0,0,0,0.15)]">
            <span className="font-OutfitBold text-4xl font-extrabold">
              Email validation
            </span>
          </div>
          <SingleEmailValidation></SingleEmailValidation>
          <div className="relative flex w-full flex-col items-center justify-center pt-[60px]">
            <div className="mb-[50px] flex h-[1px] w-[calc(100%-50px)] bg-[#E8E7E7]"></div>
            <div className="align-center flex w-full justify-between px-[25px]">
              <div className="flex  flex-col gap-1">
                <div className="font-OutfitBold flex w-[520px] flex-col text-4xl font-extrabold">
                  File uploads
                </div>
                <div className="font-OutfitLight flex w-fit flex-col text-lg">
                  View results of recent file uploads and bulk verifications
                </div>
              </div>

              <div id="upload-button" className="flex items-center w-fit gap-2 ">
                <div
                  className={
                    "flex h-fit cursor-pointer flex-row items-center gap-1 rounded-md border bg-[#4873FA] px-[30px] py-[14.5px] text-lg uppercase leading-[100%] text-white hover:bg-[#3453b8] transition-all"
                  }
                  onClick={() => {
                    setCurrentWidgetIndex(1);
                  }}
                >
                  <div className="select-none">Start new upload</div>
                </div>
              </div>
            </div>
            <EmailValidationResultsTable></EmailValidationResultsTable>
          </div>
        </>
      ) : null}

      {currentWidgetIndex == 1 || currentWidgetIndex == 2 ? (
        <EmailUploadWidget
          currentWidgetIndex={currentWidgetIndex}
          setCurrentWidgetIndex={setCurrentWidgetIndex}
        />
      ) : null}

      {currentWidgetIndex == 3 ? (
        <>
          <div className="leading-loose flex w-full flex-row justify-between gap-2 bg-white p-6 drop-shadow-lg filter">
            <p className="font-OutfitBold leading-loose text-3xl text-gray-950">
              Bulk Enrich
            </p>

            {/* Search input */}
            <div className="flex flex-row gap-2">
              <Button
                onClick={() => {
                  setCurrentWidgetIndex(1);
                }}
                className="font-Outfit h-11 w-56 rounded-md bg-blue-500 px-3 py-1 text-base font-bold uppercase text-white"
              >
                Start new uploading
              </Button>
            </div>
          </div>

          <BaseContainer width={pageContentWidth}>
            <EmailValidationResultsTable />
          </BaseContainer>
        </>
      ) : null}
    </MainLayout>
  );
}
