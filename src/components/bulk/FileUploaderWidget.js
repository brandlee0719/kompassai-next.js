import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { toast } from "react-toastify";

import { ReactComponent as UploadSVG } from "@/assets/image/bulk/upload.svg";
import { bulkEnrichTemplateHeader } from "@/utils/common";

const FileUploaderWidget = ({ attachedFileName, onFileContent }) => {
  const isValidateContent = (content, fileType) => {
    if (fileType == "csv") {
      for (const key of Object.keys(bulkEnrichTemplateHeader)) {
        if (
          bulkEnrichTemplateHeader[key].join(",") ==
          content?.meta?.fields?.join(",")
        )
          return true;
      }
      return false;
    }
    if (fileType == "xlsx" || fileType == "xls") {
      try {
        debugger;
        for (const key of Object.keys(bulkEnrichTemplateHeader)) {
          if (
            bulkEnrichTemplateHeader[key].join(",") ==
            Object.keys(content[0])?.join(",")
          )
            return true;
        }
      } catch (error) {
        return false;
      }
      return false;
    }
  };
  const getValidEnrichType = (content, fileType) => {
    if (fileType == "csv") {
      for (const key of Object.keys(bulkEnrichTemplateHeader)) {
        if (
          bulkEnrichTemplateHeader[key].join(",") ==
          content?.meta?.fields?.join(",")
        )
          return key;
      }
      return null;
    }
    if (fileType == "xlsx" || fileType == "xls") {
      try {
        for (const key of Object.keys(bulkEnrichTemplateHeader)) {
          if (
            bulkEnrichTemplateHeader[key].join(",") ==
            Object.keys(content[0])?.join(",")
          )
            return key;
        }
      } catch (error) {
        return null;
      }
      return null;
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
            const fileContent = e.target.result;

            switch (fileType) {
              case "csv":
                Papa.parse(fileContent, {
                  complete: (result) => {
                    console.log("Parsed CSV:", result);
                    if (isValidateContent(result, fileType))
                      onFileContent(
                        file.name,
                        getValidEnrichType(result, fileType),
                        result.data
                      );
                    else
                      toast.error("Wrong formatted file", { theme: "colored" });
                  },
                  header: true,
                });
                break;
              case "txt":
                console.log("Read TXT:", fileContent);
                throw new Error(`Unsupported file type:${fileType}`);
                // onFileContent(
                //   file.name,
                //   getValidEnrichType(result, fileType),
                //   fileContent
                // );
                break;
              case "xls":
              case "xlsx":
                debugger;
                const workbook = XLSX.read(fileContent, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const data = XLSX.utils.sheet_to_json(worksheet);
                console.log("Read XLS/XLSX:", data);
                if (isValidateContent(data, fileType))
                  onFileContent(
                    file.name,
                    getValidEnrichType(data, fileType),
                    data
                  );
                else toast.error("Wrong formatted file", { theme: "colored" });
                break;
              default:
                throw new Error(`Unsupported file type:${fileType}`);
            }
          };

          if (fileType === "csv" || fileType === "txt") {
            reader.readAsText(file);
          } else if (fileType === "xls" || fileType === "xlsx") {
            reader.readAsBinaryString(file);
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
    [onFileContent]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".csv, .txt, .xls, .xlsx",
    multiple: false, // This will restrict to only one file
  });

  if (attachedFileName) {
    return (
      <>
        <div className="flex flex-col items-center justify-center w-full p-8 mt-2 cursor-pointer rounded-xl border-2 border-dashed border-[#E8E7E7] text-center text-lg font-light select-none">
          <div className="text-xl text-black text-opacity-40 font-Outfit">
            Attached
          </div>
          <div className="text-2xl text-black font-Outfit">
            {attachedFileName}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          {...getRootProps()}
          className="flex flex-col items-center justify-center w-full p-8 mt-2 cursor-pointer rounded-xl border-2 border-dashed border-[#E8E7E7] text-center text-lg font-light select-none"
        >
          <input {...getInputProps()} />
          <UploadSVG />
          <div className="text-black font-Outfit">
            Click to upload or drag and drop
          </div>
          <div className="text-xl text-black text-opacity-40 font-Outfit">
            CSV, TXT, XLS, or XLSX
          </div>
        </div>
      </>
    );
  }
};

export default FileUploaderWidget;
