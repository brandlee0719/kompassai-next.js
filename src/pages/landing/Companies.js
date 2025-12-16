import React from "react";
import Company from "./Company";

const logos1 = [
  "Google",
  "Microsoft",
  "Zoom",
  "Notion",
  "Amazon",
  "Cibco",
  "Deloitte",
  "Linkedin",
  "Doordash",
  "Scale",
];
const logos2 = [
  "Adobe",
  "Slack",
  "Scotiabank",
  "Shopify",
  "Intel",
  "SnowFlake",
  "IBM",
  "Toast",
  "Stripe",
  "FedEx",
];

const Companines = () => {
  return (
    <div className="flex flex-row justify-center">
      <div
        className="flex flex-row flex-wrap justify-center"
        style={{ width: "60%" }}
      >
        {logos1.map((logo, i) => {
          return (
            <div className="flex flex-row justify-center">
              <Company key={i} data={{ logo1: logo, logo2: logos2[i], i }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Companines;
