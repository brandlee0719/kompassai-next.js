import { useState, useEffect } from "react";
import { Button, Select, Option } from "@material-tailwind/react";
import BaseContainer from "@/components/BaseContainer";
import { pageContentWidth } from "@/utils/common";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FileUploaderWidget from "@/components/email_validation/FileUploaderWidget";
import { ReactComponent as PerformanceSVG } from "@/assets/image/email-validation/performance.svg";
import { ReactComponent as BulkValidateSVG } from "@/assets/image/email-validation/email-icon.svg";
import { ReactComponent as InformationSVG } from "@/assets/image/bulk/info.svg";
import StyledInput from "./StyledInput";
import { toast } from "react-toastify";
import { useHTTPRequest } from "@/hooks/useHTTPRequest";
import { useMutation } from "@tanstack/react-query";
import { Backdrop } from "@mui/material";
import LightSpinner from "../common/LightSpinner";
function FileUploadValidationWidget({ setCurrentWidgetIndex }) {
  const [loading, setLoading] = useState(false);
  const handleFileContent = (fileName, fileContent) => {
    let attachedInfo = {
      name: fileName,
      content: fileContent,
    };
    setAttachedFileInfo(attachedInfo);
  };
  const [attachedFileInfo, setAttachedFileInfo] = useState(null);
  const initialValues = {
    file: {},
    fileName: "",
  };
  const validationSchema = Yup.object().shape({
    file: Yup.mixed()
      .transform((v) => (!v.name ? undefined : v))
      .required("No file or it's broken")
      .test("Test file size", "File", (value, text) => {
      
        if (value.size >= 5000000) return false;
        return true;
      }),
    fileName: Yup.string()
      .required("Please name the list")
      .max(80, "List name is too long!"),
  });

  const sendDataAsList = useHTTPRequest("/email-validation?", "PUT");

  const { data, mutateAsync: sendDataAsListMutation } = useMutation({
    mutationFn: sendDataAsList,
  });

  const handleInitiateLoading = async (values) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("extension", values.file.name.split(".").pop());
      formData.append("file", values.file, values.fileName);
      formData.append("fileName", [values.fileName]);
     
      const result = await sendDataAsListMutation(formData);
   
    } catch (error) {
     
      setLoading(false);
      toast.error("Something went wrong, try again");
      return;
    }
    toast.success("Successfully uploaded!");
    setLoading(false);
    setTimeout(() => {
      setCurrentWidgetIndex(0); //TODO: Add additional screen with list?
    }, 2000);
  };
  useEffect(() => {
    setAttachedFileInfo(null);
  }, []);
  return (
    <>
      {loading ? (
        <Backdrop
          open
          className="!absolute"
          sx={{
            backgroundColor: "rgba(0,0,0,0.18)",
            backdropFilter: "blur(2px)",
            zIndex: 10,
          }}
        >
          <LightSpinner />
        </Backdrop>
      ) : null}
      <BaseContainer width={pageContentWidth}>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="my-24 flex w-6/12 flex-col gap-2 rounded-md border-[1px] border-[#E8E7E7] p-6">
            <div className="font-Outfit flex flex-col text-left text-2xl font-extrabold">
              Email validation
            </div>

            <div className="font-Outfit mt-3 flex flex-row justify-between gap-5 text-center text-lg">
              <div className="group inline-flex w-[450px] cursor-pointer justify-start gap-3 rounded-lg transition-all duration-300 ">
                <div className="flex-row items-center justify-center align-middle">
                  <BulkValidateSVG className="h-10 w-10" />
                </div>
                <div className="shrink grow basis-0 flex-col gap-1">
                  <div className="text-md font-Outfit leading-3 select-none text-left text-gray-950">
                    Validate
                  </div>
                  <div className="font-Outfit leading-3 select-none text-left text-sm text-gray-950">
                    View results
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleInitiateLoading}
            >
              {({ setFieldValue, errors, handleChange }) => (
                <Form>
                  <div className="flex flex-col gap-1">
                    <div className="font-Outfit text-md mt-5 flex flex-col text-left font-bold">
                      List name
                    </div>

                    <StyledInput
                      name="fileName"
                      error={errors["fileName"]}
                      placeholder="e.g. My Emails"
                    ></StyledInput>
                    <ErrorMessage
                      name="fileName"
                      component="div"
                      className="font-Outfit leading-tight text-sm font-normal text-red-600"
                    ></ErrorMessage>
                  </div>

                  <hr className="my-4 border-[#E8E7E7]"></hr>

                  <div className="flex flex-row justify-between">
                    <div className="font-Outfit text-lg font-bold text-gray-950">
                      Upload your file
                    </div>
                    <div className="font-Outfit text-base font-light text-gray-500">
                      Uploader supports CSV and TXT files
                    </div>
                  </div>

                  <FileUploaderWidget
                    error={errors["file"]}
                    onChange={(file) => setFieldValue("file", file)}
                    attachedFileName={attachedFileInfo?.name}
                    onFileContent={handleFileContent}
                    name="file"
                    reset={() => {
                      setAttachedFileInfo(null);
                    }}
                  />
                  <ErrorMessage
                    name="file"
                    component="div"
                    className="font-Outfit leading-tight text-sm font-normal text-red-600"
                  ></ErrorMessage>
                  <div className="font-Outfit mt-5 flex flex-row items-center gap-1 text-left text-sm text-[#929292]">
                    <InformationSVG />
                    If your file contains multiple columns, only the first one
                    containing 'email' in header row will be used
                  </div>
                  <div className="font-Outfit flex-wrap text-center text-lg">
                    <Button
                      type="submit"
                      className="font-Outfit mt-8 h-11 w-56 rounded-md bg-blue-500 px-3 py-1 text-lg font-medium uppercase text-white"
                    >
                      Upload
                    </Button>
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <PerformanceSVG
                      width={"24px"}
                      height={"24px"}
                    ></PerformanceSVG>
                    <div className="flex flex-col pl-4">
                      {[
                        "You can only verify up to 200 email addresses per domain name every 24 hours.",
                        "You can verify up to 50,000 email addresses per bulk. Additional rows will be skipped.",
                        "Duplicate email addresses will be skipped.",
                        "File size max is 5 MB",
                      ].map((text, index) => {
                        return (
                          <span
                            key={index}
                            className="before:left font-Outfit text-md relative rounded-[50%] text-stone-350 before:absolute before:left-[-10px]  before:top-[50%] before:h-[4px]  before:w-[4px] before:translate-x-[-50%] before:translate-y-[-50%] before:bg-stone-350 "
                          >
                            {text}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <hr className="my-2"></hr>
                  <div className="flex flex-row justify-between">
                    <Button
                      onClick={() => {
                        setCurrentWidgetIndex(1);
                      }}
                      className="font-Outfit mt-8 rounded-md border-[1px] border-[#000] bg-white px-6 py-2 text-base font-light normal-case text-black"
                    >
                      Return
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </BaseContainer>
    </>
  );
}

export default FileUploadValidationWidget;
