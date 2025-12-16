import { useEffect, useState, useCallback } from "react";
import { Button, Select, Option } from "@material-tailwind/react";
import { alpha, styled } from "@mui/material/styles";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { pageContentWidth } from "@/utils/common";
import cn from "classnames";
import { toast } from "react-toastify";
import BaseContainer from "@/components/BaseContainer";
import ConfirmDialog from "@/components/email_validation/ConfirmDialog";
import LightSpinner from "../common/LightSpinner";
import templateLink from "@/assets/email_validation/emails.xlsx";
import { ReactComponent as CsvSVGIcon } from "@/assets/image/bulk/csv.svg";
import { Email as EmailIcon } from "@mui/icons-material";
import { debug } from "util";
import StyledInput from "./StyledInput";
import FileUploadValidationWidget from "./FileUploadValidationWidget";
import { useHTTPRequest } from "@/hooks/useHTTPRequest";
import { useMutation } from "@tanstack/react-query";
import { Backdrop } from "@mui/material";
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Yup's one is very forgiving, so we use another one

export default function EmailUploadWidget({
  currentWidgetIndex,
  setCurrentWidgetIndex,
}) {
  const [validateOption, setValidateOption] = useState(0); // 0: csv/xls/xlsx, 1: linkedin profile
  const [visibleConfirmDlg, setVisibleConfirmDlg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({});

  const options = [
    {
      icon: "csv",
      header: "I have a CSV to Upload",
      content: "Upload your e-mails in a CSV file",
    },
    {
      icon: "contact",
      header: "I’d like to paste a list of e-mails",
      content: "Give us a list of e-mails to validate",
    },
  ];

  const sendDataAsList = useHTTPRequest("/email-validation?", "PUT");

  const { data, mutateAsync: sendDataAsListMutation } = useMutation({
    mutationFn: sendDataAsList,
  });

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: calc(50% - 12px);
    max-height: 800px;
    overflow: auto !important;
    padding: 16px;
    border-radius: 8px;
    color: #090C05;
    background: #fff;
    border: 1px solid #E8E7E7 ;
    resize: none;
    transition: background-color 0.2s;
    &:hover {
      background-color: #F9F9F9;
    }

    &:focus {
      border-color: #4873FA;
      background-color: white;
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );
  const initialValues = {
    list: "",
    emailListName: "",
  };
  const validationSchema = Yup.object().shape({
    list: Yup.string()
      .required("Please add at least one email")
      .test(
        "isValidEmailList",
        "Email list formatting is invalid",
        (value, context) => {
          const listValidity = value
            .split(",")
            .map((value) => value.trim())
            .map((email) => {
              return Yup.string().matches(emailRegex).isValidSync(email);
            });
          return !listValidity.includes(false);
        },
      ),
    emailListName: Yup.string()
      .required("Please name the list")
      .max(80, "List name is too long!"),
  });

  const onOptionSelected = (option) => {
    setValidateOption(option);
  };

  const handleInitiateLoading = async (values) => {
    setFormValues(values);
    setVisibleConfirmDlg(true);
  };
  const handleForm = async () => {
    try {
      setLoading(true);
      const formattedEmails = formValues.list.split(",").map((value) => {
        return { email: value.trim() };
      });
      const result = await sendDataAsListMutation(
        JSON.stringify({
          emails: formattedEmails,
          fileName: formValues.emailListName,
        }),
      );
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
      {currentWidgetIndex == 1 ? (
        <BaseContainer width={pageContentWidth}>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="my-24 flex flex-col gap-4 rounded-md border-[1px] border-[#E6E6E6] p-6">
              <div className="font-OutfitBold flex flex-col text-left text-[28px] font-extrabold">
                What format is your contact list in?
              </div>
              <div className="font-Outfit mt-4 flex flex-row justify-between gap-5 text-center text-lg">
                {options.map((option, index) => {
                  return (
                    <div
                      onClick={() => {
                        onOptionSelected(index);
                      }}
                      className={
                        "group inline-flex w-[450px] cursor-pointer justify-start gap-4 rounded-lg border-[1px] border-[#E6E6E6] bg-white p-8 transition-all duration-300 " +
                        (index == 0
                          ? `hover:bg-[#4873FA] aria-selected:bg-[#4873FA]`
                          : `hover:bg-[#000000] aria-selected:bg-[#000000]`)
                      }
                      aria-selected={index == validateOption}
                    >
                      {index == 0 ? (
                        <CsvSVGIcon className="h-8 w-8 transition-all duration-300 group-hover:fill-current group-hover:text-white group-aria-selected:fill-current group-aria-selected:text-white" />
                      ) : (
                        <EmailIcon
                          sx={{ width: "32px", height: "32px" }}
                          className="transition-all duration-300 group-hover:fill-current group-hover:text-white group-aria-selected:fill-current group-aria-selected:text-white"
                        />
                      )}
                      <div className="shrink grow basis-0 flex-col gap-1">
                        <div className="font-Outfit select-none self-stretch text-left text-xl font-extrabold text-gray-950 transition-all  duration-300 group-hover:text-white  group-aria-selected:text-white">
                          {option.header}
                        </div>
                        <div className="font-Outfit leading-tight mt-1 select-none text-left text-xl text-gray-950 transition-all duration-300 group-hover:text-white group-aria-selected:text-white">
                          {option.content}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <hr className="my-4"></hr>

              {validateOption == 0 ? (
                <>
                  <div className="font-OutfitBold  flex flex-col text-left text-[28px] font-extrabold">
                    What KompassAI Needs
                  </div>
                  <span className="font-Outfit  flex flex-col text-left  text-lg">
                    Please upload your contact list in CSV or TXT format
                  </span>
                  <span className="font-Outfit  flex flex-col text-left text-lg">
                    CSV file must contain header row and a field that contains
                    'email' in its name
                  </span>
                  <span className="font-Outfit  flex flex-col text-left text-lg">
                    TXT file should contain list of emails separated by comma
                  </span>
                  <div className="font-Outfit mt-4 flex flex-row gap-5 text-center text-lg">
                    <div className="align-start flex w-[390px] flex-col gap-2 rounded-lg border-[1px] border-stone-250 p-4">
                      <span className="font-Outfit color-[black] text-2xl">
                        {" "}
                        email{" "}
                      </span>
                      <hr className="w-full "></hr>
                      <span className={"color-[black]"}>
                        maikal.yamauchi@kompassai.com
                      </span>
                      <span className={"color-[black]"}>
                        john.field@kompassai.com
                      </span>
                    </div>
                    <div className="flex h-full items-center">
                      <p>CSV or TXT</p>
                    </div>
                    <div className="align-start flex w-[390px] flex-col gap-2 rounded-lg border-[1px] border-stone-250 p-4">
                      <span className={"color-[black] text-start"}>
                        maikal.yamauchi@kompassai.com, john.field@kompassai.com
                      </span>
                    </div>
                  </div>
                  <hr className="my-2"></hr>
                  <div className="font-OutfitBold  flex flex-col text-left text-[28px] font-extrabold">
                    Use our template for the most accurate results
                  </div>
                  <div className="font-Outfit flex flex-col text-left text-sm">
                    Download our CSV template for correct column format.
                  </div>
                  <a href={templateLink} target="blank" download>
                    <Button className="font-Outfit mt-1 h-11 w-56 rounded-lg border-[1px] border-[#000] bg-white px-2 py-1 text-base normal-case text-gray-950">
                      Kompass AI CSV Template
                    </Button>
                  </a>
                  <hr className="my-2"></hr>
                  <div className="flex flex-row justify-between">
                    <Button
                      onClick={() => {
                        setCurrentWidgetIndex(0);
                      }}
                      className="font-Outfit rounded-md border-[1px] border-[#000] bg-white  px-6 py-2  text-base font-light normal-case text-black"
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={() => {
                        setCurrentWidgetIndex(2);
                      }}
                      className="font-Outfit rounded-md bg-blue-500  px-6 py-2  text-base font-light normal-case text-white"
                    >
                      Next
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleInitiateLoading}
                  >
                    {({ errors }) => (
                      <Form className="flex flex-col gap-8">
                        <div>
                          <label className=" flex flex-col gap-4">
                            <div className="font-OutfitBold flex flex-col text-left text-[28px]">
                              Paste a list of e-mails
                            </div>
                            <div className="font-Outfit mb-8 flex flex-col text-left text-sm">
                              Paste e-mail addresses separated by a comma (,),
                              up to 100 addresses
                            </div>
                          </label>
                          <Field
                            as={Textarea}
                            className={cn(
                              "font-OutfitLight  mb-1 w-full p-0 text-lg outline-none placeholder:text-[#929292] before:content-['']",
                              !!errors["list"] && "!border-[#dc2626]",
                            )}
                            variant="filled"
                            id="list"
                            name="list"
                            minRows={6}
                            placeholder="Example: youremail1@gmail.com, youremail2@gmail.com"
                          />
                          <ErrorMessage
                            name="list"
                            component="div"
                            className="font-Outfit leading-tight text-sm font-normal text-red-600"
                          />
                        </div>
                        <div>
                          <label className=" flex flex-col gap-2">
                            <div className="font-OutfitBold flex flex-col text-left text-lg">
                              List name
                            </div>
                            <div className="font-Outfit mb-2 flex flex-col text-left text-sm">
                              Provide a name for the list
                            </div>
                          </label>
                          <StyledInput
                            name={"emailListName"}
                            error={errors["emailListName"]}
                            placeholder={"My list"}
                            className="mb-1"
                          ></StyledInput>
                          <ErrorMessage
                            name="emailListName"
                            component="div"
                            className="font-Outfit leading-tight text-sm font-normal text-red-600"
                          />
                        </div>

                        <hr className="my-2"></hr>

                        <div className="font-Outfit flex-wrap text-center text-lg">
                          <Button
                            type="submit"
                            className="font-Outfit h-11 w-56 rounded-md bg-blue-500 px-3 py-1 text-lg font-medium uppercase text-white"
                          >
                            Upload
                          </Button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </>
              )}
            </div>
          </div>
        </BaseContainer>
      ) : null}

      {currentWidgetIndex == 2 ? (
        <FileUploadValidationWidget
          setCurrentWidgetIndex={setCurrentWidgetIndex}
        ></FileUploadValidationWidget>
      ) : null}

      <ConfirmDialog
        open={visibleConfirmDlg}
        handleClose={() => {
          setVisibleConfirmDlg(false);
        }}
        handleOK={() => {
          setVisibleConfirmDlg(false);
          handleForm();
        }}
      />
    </>
  );
}
