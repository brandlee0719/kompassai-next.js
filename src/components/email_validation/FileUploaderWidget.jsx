import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ErrorMessage } from "formik";
import Papa from "papaparse";
import cn from "classnames";
import { useRef } from "react";
import * as XLSX from "xlsx";
import { toast } from "react-toastify";

import { ReactComponent as UploadSVG } from "@/assets/image/bulk/upload.svg";

const FileUploaderWidget = ({
  attachedFileName,
  onFileContent,
  onChange,
  reset,
  error,
  name,
}) => {
  const inputRef = useRef(null);
  const isValidateContent = (content, fileType) => {
    if (fileType === "csv" || fileType === "txt") {
      const headers = content[0];

      if (
        headers?.length &&
        headers.find((val) => val.toLowerCase().includes("email"))
      )
        return true;
      return false;
    }
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      try {
        if (acceptedFiles?.length > 0) {
          const file = acceptedFiles[0];
          const fileType = file.name.split(".").pop().toLowerCase();

          const reader = new FileReader();

          reader.onabort = () => {
            throw new Error("file reading was aborted");
          };
          reader.onerror = () => {
            throw new Error("file reading has failed");
          };
          reader.onload = (e) => {
            onChange(file);
            const fileContent = e.target.result;
            switch (fileType) {
              case "csv":
                Papa.parse(fileContent, {
                  complete: (content) => {
                    if (isValidateContent(content.data, fileType))
                      onFileContent(file.name, content);
                    else
                      toast.error("Wrong formatted file", { theme: "colored" });
                  },
                });

                break;
              case "txt":
                Papa.parse(fileContent, {
                  complete: (content) => {
                    if (isValidateContent(content.data, fileType))
                      onFileContent(file.name, content);
                    else
                      toast.error("Wrong formatted file", { theme: "colored" });
                  },
                });
                // onFileContent(
                //   file.name,
                //   getValidEnrichType(result, fileType),
                //   fileContent
                // );
                break;
              default:
                throw new Error(`Unsupported file type:${fileType}`);
            }
          };

          if (fileType === "csv" || fileType === "txt") {
            reader.readAsText(file);
          } else {
            throw new Error(`Unsupported file type:${fileType}`);
          }
        } else {
          throw new Error("Something went wrong!");
        }
      } catch (error) {
        toast.error(error?.message, { theme: "colored" });
      }
    },
    [onFileContent],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".csv, .txt",
    multiple: false, // This will restrict to only one file
  });
  const containerClass = cn(
    "mt-2 flex w-full cursor-pointer select-none flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#E8E7E7] p-8 text-center text-lg font-light",
    error && "border-red-500",
  );
  return (
    <>
      {attachedFileName ? (
        <>
          <div onClick={reset} className={containerClass}>
            <div className="text-gray-950text-opacity-40 font-Outfit text-xl">
              Attached
            </div>
            <div className="text-gray-950font-Outfit text-2xl">
              {attachedFileName}
            </div>
          </div>
        </>
      ) : (
        <>
          <div {...getRootProps()} className={containerClass}>
            <input ref={inputRef} {...getInputProps()} name={name} />
            <UploadSVG />
            <div className="font-Outfit text-gray-950">
              Click to upload or drag and drop your file
            </div>
            <div className="font-Outfit text-xl text-gray-950 text-opacity-40">
              CSV or TXT
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FileUploaderWidget;
