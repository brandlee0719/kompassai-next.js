import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Button, Select, Option } from "@material-tailwind/react";
import { toast } from "react-toastify";
import Papa from 'papaparse';

import useBulk from "@/hooks/useBulk";

import { pageContentWidth } from "@/utils/common";

import BaseContainer from "@/components/BaseContainer";
import MainLayout from "@/components/MainLayout";
import LogoutDialog from "@/components/LogoutDialog";
import ConfirmDialog from "@/components/bulk/ConfirmDialog";
import BulkResultTable from "@/components/bulk/BulkResultTable";
import BulkUploadWidget from "@/components/bulk/BulkUploadWidget";




export default function ListsScene() {

  const { bulkEnrichByLinkedin, bulkEnrichBySearch } = useBulk();

  const [loading, setLoading] = useState(false);

  const [currentWidgetIndex, setCurrentWidgetIndex] = useState(3);

  return (
    <MainLayout loading={loading}>
      {
        currentWidgetIndex == 0 ? (
          <BaseContainer width={pageContentWidth}>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-5/12 flex flex-col rounded-md border-[1px] border-[#E6E6E6] p-10 my-24 gap-3">
                <div className="self-stretch flex flex-col font-Outfit text-center font-extrabold text-3xl">Bulk Enrich your Contacts</div>
                <div className="flex-wrap font-Outfit text-center text-lg">
                  "Upload your contacts into the bulk enrichment tool to receive real-time data. We will provide precise details and categorize your contacts into organized lists
                </div>
                <div className="flex-wrap font-Outfit text-center text-lg mt-10">
                  <Button onClick={() => { setCurrentWidgetIndex(1); }} className="w-56 h-11 text-white bg-blue-500 font-Outfit rounded-md py-1 px-3 uppercase font-medium text-lg">
                    begin uploading
                  </Button>
                </div>
              </div>
            </div>
          </BaseContainer>
        ) : null
      }

      {
        (currentWidgetIndex == 1 || currentWidgetIndex == 2) ? (
          <BulkUploadWidget currentWidgetIndex={currentWidgetIndex} setCurrentWidgetIndex={setCurrentWidgetIndex} />
        ) : null
      }

      {
        currentWidgetIndex == 3 ? (
          <>
            <div className="w-full flex flex-row justify-between leading-loose gap-2 p-6 bg-white filter drop-shadow-lg">
              <p className="text-3xl text-black font-OutfitBold leading-loose">Bulk Enrich</p>

              {/* Search input */}
              <div className="flex flex-row gap-2">
                <Button onClick={() => { setCurrentWidgetIndex(0) }} className="w-56 h-11 text-white bg-blue-500 font-Outfit font-bold rounded-md py-1 px-3 uppercase text-base">
                  start new uploading
                </Button>
              </div>
            </div>

            <BaseContainer width={pageContentWidth}>
              <BulkResultTable />
            </BaseContainer>
          </>
        ) : null
      }
    </MainLayout >
  );
}
