import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { InputAdornment, TextField, CircularProgress } from "@mui/material";

import {
  useQuery,
  useMutation,
  useIsFetching,
  useIsMutating,
} from "@tanstack/react-query";
import { useHTTPRequest } from "@/hooks/useHTTPRequest";
import { Button, Select, Option } from "@material-tailwind/react";
import * as Yup from "yup";
import StatusBadge from "./StatusBadge";
import { useState } from "react";
import StyledInput from "./StyledInput";

function SingleEmailValidation() {
  const singleEmailValidation = useHTTPRequest("/email-validation/", "POST");
  const [visible, setVisible] = useState(false);
  const isMutating = useIsMutating();
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  const handleSubmit = async (values) => {
    ValidateSingleMutation(JSON.stringify(values));
    setVisible(true);
  };

  const {
    isSuccess,
    data,
    error,
    mutateAsync: ValidateSingleMutation,
  } = useMutation({
    mutationFn: singleEmailValidation,
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mt-[50px] flex w-full min-w-[500px] max-w-[1042px]  flex-col gap-8 p-6">
        <div className="flex min-w-[500px] max-w-[1042px] flex-col  gap-1  rounded-md">
          <div className="font-OutfitBold flex w-[520px] flex-col self-center text-center text-4xl font-extrabold">
            Verify any email address with the most complete email checker
          </div>
          <div className="font-OutfitLight flex w-fit flex-col self-center text-center text-lg">
            Email verifier
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values, errors }) => (
            <Form className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <div className="font-Outfit text-md flex flex-col text-left font-bold">
                  Email
                </div>
                <div className="flex w-full flex-row items-center bg-white ">
                  <StyledInput
                    errors={errors}
                    fieldName={"email"}
                  ></StyledInput>
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="font-Outfit leading-tight text-sm font-normal text-red-600"
                />
                {data?.response && visible && (
                  <StatusBadge email={data?.response}></StatusBadge>
                )}
              </div>
              <div className="font-Outfit flex flex-wrap justify-center text-center text-lg ">
                <Button
                  type="submit"
                  className="font-Outfit flex h-12 w-[250px] items-center justify-center gap-2 rounded-md bg-black px-3 py-1 text-lg font-medium uppercase text-white"
                >
                  {!!isMutating && (
                    <CircularProgress
                      style={{ width: "20px", height: "20px" }}
                    />
                  )}
                  <span>Verify</span>
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SingleEmailValidation;
