import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Button, Select, Option } from "@material-tailwind/react";
import { toast } from "react-toastify";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import Papa from "papaparse";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";

import useBulk from "@/hooks/useBulk";

import { pageContentWidth } from "@/utils/common";

import BaseContainer from "@/components/BaseContainer";
import ConfirmDialog from "@/components/bulk/ConfirmDialog";
import FileUploaderWidget from "@/components/bulk/FileUploaderWidget";
import LightSpinner from "../common/LightSpinner";

import { ReactComponent as CsvSVGIcon } from "@/assets/image/bulk/csv.svg";
import { ReactComponent as ContactSVGIcon } from "@/assets/image/bulk/contact.svg";
import { ReactComponent as TableSearchSVG } from "@/assets/image/bulk/table_search.svg";
import { ReactComponent as TableLinkedinSVG } from "@/assets/image/bulk/table_linkedin.svg";
import { ReactComponent as InputProfileSVG } from "@/assets/image/bulk/input_profile.svg";
import { ReactComponent as BulkValidateSVG } from "@/assets/image/bulk/bulk_validate.svg";
import { ReactComponent as InfomationSVG } from "@/assets/image/bulk/info.svg";
import { ReactComponent as DescriptionSVG } from "@/assets/image/bulk/description.svg";
import { debug } from "util";

export default function BulkUploadWidget({
  currentWidgetIndex,
  setCurrentWidgetIndex,
}) {
  const { bulkEnrichByLinkedin, bulkEnrichBySearch, bulkEnrichDeleteResult } =
    useBulk();

  const [enrichOption, setEnrichOption] = useState(0); // 0: csv/xls/xlsx, 1: linkedin profile

  const [visibleConfirmDlg, setVisibleConfirmDlg] = useState(false);

  const [listName, setListName] = useState("");
  const [linkedinUrls, setLinkedinUrls] = useState([]);
  const [attachedFileInfo, setAttachedFileInfo] = useState(null);

  const [loading, setLoading] = useState(false);

  const [bContactIncluded, setContactIncluded] = useState(true);
  const [bEmailIncluded, setEmailIncluded] = useState(true);
  const [bPhoneIncluded, setPhoneIncluded] = useState(true);

  const [bSourcesIncluded, setSourcesIncluded] = useState(false);

  const options = [
    {
      icon: "csv",
      header: "I have a CSV to Upload",
      content:
        "Upload your own list of contacts and we’ll match profiles with accurate information",
    },
    {
      icon: "contact",
      header: "I’d like to paste a list of LinkedIn URL’s",
      content:
        "Give us a list of LinkedIn URL’s and we’ll find accurate information for each profile",
    },
  ];

  useEffect(() => {
    setAttachedFileInfo(null);
  }, [currentWidgetIndex]);

  const onOptionSelected = (option) => {
    setEnrichOption(option);
  };

  const onFinishClicked = async () => {
    debugger;
    if (listName.length == 0) {
      toast.error("Kindly provide the List Name you'd like to save.", {
        theme: "colored",
      });
    } else if (linkedinUrls.length == 0 && enrichOption == 1) {
      toast.error("Kindly provide the LinkedIn URLs you'd like to enrich.", {
        theme: "colored",
      });
    } else if (attachedFileInfo?.inputs?.length == 0 && enrichOption == 0) {
      toast.error("Kindly Attach the File you'd like to enrich.", {
        theme: "colored",
      });
    } else {
      setVisibleConfirmDlg(true);
    }
  };

  const onBulkConfirmed = async () => {
    setLoading(true);

    if (enrichOption == 0) {
      if (attachedFileInfo?.enrichType == "linkedin") {
        await bulkEnrichByLinkedin({
          contactTitle: listName,
          inputs: attachedFileInfo?.inputs,
        });
      }
      if (attachedFileInfo?.enrichType == "search") {
        await bulkEnrichBySearch({
          contactTitle: listName,
          inputs: attachedFileInfo?.inputs,
        });
      }
    } else if (enrichOption == 1) {
      await bulkEnrichByLinkedin({
        contactTitle: listName,
        inputs: linkedinUrls,
      });
    }

    setTimeout(() => {
      setLoading(false);
      setCurrentWidgetIndex(3);
    }, 3000);

    // const csvContent = [],
    //   headerItem = ["No"];

    // if (bSourcesIncluded) headerItem.push("Linkedin Url");
    // if (bContactIncluded) headerItem.push("Name", "Company", "Location");
    // if (bEmailIncluded) headerItem.push("Email");
    // if (bPhoneIncluded) headerItem.push("PhoneNumbers");
    // csvContent.push(headerItem);

    // result.forEach((item, index) => {
    //   const record = [];

    //   record.push(index + 1);
    //   if (bSourcesIncluded) record.push(linkedinUrls[index]);
    //   if (bContactIncluded)
    //     record.push(item?.name, item?.companyName, item?.location);
    //   if (bEmailIncluded) record.push(item?.emails?.join(","));
    //   if (bPhoneIncluded) record.push(item?.phoneNumbers?.join(","));

    //   csvContent.push(record);
    // });

    // const csv = Papa.unparse(csvContent);

    // const blob = new Blob([csv], { type: "text/csv" });
    // const link = document.createElement("a");
    // link.href = URL.createObjectURL(blob);
    // link.download = `${listName}.csv`;
    // link.click();
  };

  const isLinkedinUrl = (string) => {
    var linkedinRegex =
      /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+$/;
    return linkedinRegex.test(string);
  };

  const extractLinkedinUrlsFromText = (value) => {
    setLinkedinUrls(value.split("\n"));
  };

  const handleFileContent = (fileName, enrichType, fileContent) => {
    let attachedInfo = {
      name: fileName,
      content: fileContent,
      enrichType: enrichType,
    };

    debugger;

    const inputs = [];
    if (enrichType == "linkedin") {
      for (const input of fileContent) {
        inputs.push(input?.LinkedinURLs);
      }
    }
    if (enrichType == "search") {
      for (const input of fileContent) {
        inputs.push({
          name: input?.Name,
          company: input?.Company,
          location: input?.Location,
        });
      }
    }
    attachedInfo["inputs"] = inputs;

    setAttachedFileInfo(attachedInfo);
  };

  return (
    <>
      {loading ? <LightSpinner /> : null}
      {currentWidgetIndex == 1 ? (
        <BaseContainer width={pageContentWidth}>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col rounded-md border-[1px] border-[#E6E6E6] p-6 my-24 gap-3">
              <div className="flex flex-col font-Outfit text-left font-extrabold text-2xl">
                What format is your contact list in?
              </div>
              <div className="flex flex-row font-Outfit text-center text-lg justify-between gap-5 mt-4">
                {options.map((option, index) => {
                  return (
                    <div
                      onClick={() => {
                        onOptionSelected(index);
                      }}
                      className={
                        "w-[450px] group justify-start rounded-lg gap-3 inline-flex bg-white border-[1px] border-[#E6E6E6] p-5 transition-all duration-300 cursor-pointer " +
                        (index == 0
                          ? `hover:bg-[#4873FA] aria-selected:bg-[#4873FA]`
                          : `hover:bg-[#000000] aria-selected:bg-[#000000]`)
                      }
                      aria-selected={index == enrichOption}
                    >
                      {index == 0 ? (
                        <CsvSVGIcon className="w-8 h-8 group-aria-selected:fill-current group-aria-selected:text-white group-hover:fill-current group-hover:text-white transition-all duration-300" />
                      ) : (
                        <ContactSVGIcon className="w-8 h-8 group-aria-selected:fill-current group-aria-selected:text-white group-hover:fill-current group-hover:text-white transition-all duration-300" />
                      )}
                      <div className="grow shrink basis-0 flex-col gap-1">
                        <div className="self-stretch text-black group-aria-selected:text-white group-hover:text-white text-xl font-extrabold font-Outfit text-left  transition-all duration-300  select-none">
                          {option.header}
                        </div>
                        <div className="text-black group-aria-selected:text-white group-hover:text-white text-xl font-Outfit leading-tight text-left mt-1 transition-all duration-300 select-none">
                          {option.content}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <hr className="my-2"></hr>

              {enrichOption == 0 ? (
                <>
                  <div className="flex flex-col font-Outfit text-left font-extrabold text-2xl">
                    Use our template for the most accurate results
                  </div>
                  <div className="flex flex-col font-Outfit text-left text-sm">
                    Download our CSV template for correct column format.
                  </div>
                  <div className="flex flex-row font-Outfit text-center text-lg gap-5 mt-4">
                    <TableSearchSVG />
                    <div className="h-full flex items-center">
                      <p>or</p>
                    </div>
                    <TableLinkedinSVG />
                  </div>
                  <hr className="my-2"></hr>
                  <div className="flex flex-col font-Outfit text-left font-extrabold text-2xl">
                    What KompassAI Needs
                  </div>
                  <div className="flex flex-col font-Outfit text-left text-sm">
                    Please upload your contact list in CSV format.
                    <br />
                    In order to match an accurate list of people with your data
                    we suggest that each row have either:
                  </div>
                  <Button className="w-56 h-11 text-black bg-white border-[1px] border-[#000] font-Outfit normal-case rounded-lg py-1 px-2 text-base mt-1">
                    Kompass AI CSV Template
                  </Button>
                </>
              ) : (
                <>
                  <div className="flex flex-col font-Outfit text-left font-extrabold text-2xl">
                    Paste a list of LinkedIn profiles
                  </div>
                  <div className="flex flex-col font-Outfit text-left text-sm">
                    Please paste one URL per line.
                  </div>
                  <InputProfileSVG />
                </>
              )}

              <hr className="my-2"></hr>
              <div className="flex flex-col font-Outfit text-left text-sm mt-5">
                You will only be charged for accurate matches.
              </div>
              <div className="flex flex-row justify-between">
                <Button
                  onClick={() => {
                    setCurrentWidgetIndex(0);
                  }}
                  className="text-black bg-white border-[1px] border-[#000] font-Outfit rounded-md py-1 px-3 normal-case font-light text-base"
                >
                  Previous
                </Button>
                <Button
                  onClick={() => {
                    setCurrentWidgetIndex(2);
                  }}
                  className="text-white bg-blue-500 font-Outfit rounded-md py-1 px-3 normal-case font-light text-base"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </BaseContainer>
      ) : null}

      {currentWidgetIndex == 2 ? (
        <BaseContainer width={pageContentWidth}>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-6/12 flex flex-col rounded-md border-[1px] border-[#E8E7E7] p-6 my-24 gap-2">
              <div className="flex flex-col font-Outfit text-left font-extrabold text-2xl">
                Bulk Enrich
              </div>
              <>
                <div className="flex flex-row font-Outfit text-center text-lg justify-between gap-5 mt-3">
                  <div className="w-[450px] group justify-start rounded-lg gap-3 inline-flex transition-all duration-300 cursor-pointer ">
                    <div className="flex-row justify-center items-center align-middle">
                      <BulkValidateSVG className="w-10 h-10" />
                    </div>
                    <div className="grow shrink basis-0 flex-col gap-1">
                      <div className="text-black text-md font-Outfit text-left select-none leading-3">
                        Validate
                      </div>
                      <div className="text-black text-sm font-Outfit text-left select-none leading-3">
                        View results
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex flex-col font-Outfit text-left text-md mt-5 font-bold">
                    List name
                  </div>
                  <div className="w-full flex flex-row p-[8px_12px] rounded-md items-center bg-white border-[1px] border-[#E8E7E7]">
                    <input
                      onChange={(e) => {
                        setListName(e.currentTarget.value);
                      }}
                      className="outline-none font-Outfit font-[300px] text-base w-full placeholder:text-[#E8E7E7]"
                      placeholder="e.g. My Contacts"
                    />
                  </div>
                </div>
              </>

              <hr className="my-4 border-[#E8E7E7]"></hr>

              <>
                <div className="flex flex-row justify-between">
                  {enrichOption == 0 ? (
                    <>
                      <div className="text-lg font-bold font-Outfit text-black">
                        Or upload your file (Maximum 1000)
                      </div>
                      <div className="text-base font-light font-Outfit text-gray-500">
                        Uploader supports CSV, TXT, XLS, or XLSX
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-lg font-bold font-Outfit text-black">
                        Enter the Linkedin URLs (Maximum 25)
                      </div>
                      <div className="text-base font-light font-Outfit text-gray-500">
                        Comma-separated or one per line
                      </div>
                    </>
                  )}
                </div>

                {enrichOption == 0 ? (
                  attachedFileInfo ? (
                    <FileUploaderWidget
                      attachedFileName={attachedFileInfo?.name}
                    />
                  ) : (
                    <FileUploaderWidget onFileContent={handleFileContent} />
                  )
                ) : (
                  <div className="w-full flex flex-row p-[8px_12px] rounded-md items-center bg-white border-[1px] border-[#E8E7E7]">
                    <textarea
                      onChange={(e) => {
                        extractLinkedinUrlsFromText(e.currentTarget.value);
                      }}
                      className="outline-none font-Outfit font-[300px] text-base w-full placeholder:text-[#E8E7E7]"
                      placeholder="https://www.linkedin.com/in/maikal-yamauchi/
                          https://www.linkedin.com/in/maikal-yamauchi/
                          ...."
                      rows={7}
                    />
                  </div>
                )}

                {enrichOption == 0 ? (
                  <div className="flex flex-row items-center font-Outfit text-left text-sm mt-5 gap-1 text-[#929292]">
                    <InfomationSVG />
                    If your file contains multple columnes, we`ll automatically
                    detect the one containing the email addresses
                  </div>
                ) : null}
                <div className="flex flex-row mt-1 gap-3">
                  <div className="flex flex-row items-center gap-1 font-Outfit text-sm">
                    <Checkbox
                      checked={bContactIncluded}
                      onChange={(event) => {
                        setContactIncluded(event.currentTarget.checked);
                      }}
                      className="w-5 h-5"
                      size="small"
                    />{" "}
                    Contact
                  </div>
                  <div className="flex flex-row items-center gap-1 font-Outfit text-sm">
                    <Checkbox
                      checked={bEmailIncluded}
                      onChange={(event) => {
                        setEmailIncluded(event.currentTarget.checked);
                      }}
                      className="w-5 h-5"
                      size="small"
                    />{" "}
                    Email
                  </div>
                  <div className="flex flex-row items-center gap-1 font-Outfit text-sm">
                    <Checkbox
                      checked={bPhoneIncluded}
                      onChange={(event) => {
                        setPhoneIncluded(event.currentTarget.checked);
                      }}
                      className="w-5 h-5"
                      size="small"
                    />{" "}
                    Phone
                  </div>
                </div>
              </>

              <>
                <div className="text-lg font-bold font-Outfit text-black mt-5">
                  Include sources in the result
                </div>
                <Switch
                  onChange={(event) => {
                    setSourcesIncluded(event.currentTarget.value == "on");
                  }}
                />
              </>

              <div className="flex-wrap font-Outfit text-center text-lg">
                <Button
                  onClick={onFinishClicked}
                  className="w-56 h-11 text-white bg-blue-500 font-Outfit rounded-md py-1 px-3 uppercase font-medium text-lg"
                >
                  FINISH
                </Button>
              </div>

              <DescriptionSVG className="mt-5" />

              <div className="flex flex-row justify-between mt-5">
                <Button
                  onClick={() => {
                    setCurrentWidgetIndex(1);
                  }}
                  className="text-black bg-white border-[1px] border-[#000] font-Outfit rounded-md py-1 px-3 normal-case font-light text-base"
                >
                  Previous
                </Button>
                <Button
                  className="text-white bg-blue-500 disabled:bg-white disabled:text-black border-[1px] disabled:border-[#000] font-Outfit rounded-md py-1 px-3 normal-case font-light text-base"
                  disabled
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </BaseContainer>
      ) : null}

      <ConfirmDialog
        open={visibleConfirmDlg}
        handleClose={() => {
          setVisibleConfirmDlg(false);
        }}
        handleOK={() => {
          setVisibleConfirmDlg(false);
          onBulkConfirmed();
        }}
      />
    </>
  );
}
