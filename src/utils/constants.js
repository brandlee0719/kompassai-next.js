export const COGNITO_TOKEN = "accessToken";
export const COGNITO_GOOGLE_DEFAULT_PASSWORD = "KompassAIGoogle@00";

export const STORAGE_KEY = {
  USER_INFO: "userInfo",
  KOMPASS_SEARCH_CONTACT_FILTER: "kscontactFilter",
  KOMPASS_SEARCH_COMPANY_FILTER: "kscompanyFilter",
};

export const departmentList = [
  { label: "Engineering", value: "Engineering" },
  { label: "Finance & Administration", value: "Finance & Administration" },
  { label: "Human Resources", value: "Human Resources" },
  { label: "IT & IS", value: "IT & IS" },
  { label: "Marketing", value: "Marketing" },
  { label: "Operations", value: "Operations" },
  { label: "Sales", value: "Sales" },
  { label: "Support", value: "Support" },
];

export const levelList = [
  { label: "C-Level", value: "C-Level" },
  { label: "VP-Level", value: "VP-Level" },
  { label: "Human Resources", value: "Human Resources" },
  { label: "Director-Level", value: "Director-Level" },
  { label: "Manager-Level", value: "Manager-Level" },
  { label: "Operations", value: "Operations" },
  { label: "Staff", value: "Staff" },
  { label: "Other", value: "Other" },
];

export const numberOfEmployeesList = [
  { label: "0 - 25", value: "0 - 25" },
  { label: "25 - 100", value: "25 - 100" },
  { label: "100 - 250", value: "100 - 250" },
  { label: "250 - 1000", value: "250 - 1000" },
  { label: "1K - 10K", value: "1K - 10K" },
  { label: "10K - 50K", value: "10K - 50K" },
  { label: "50K - 100K", value: "50K - 100K" },
];

export const revenueList = [
  { label: "$0 - 1M", value: "$0 - 1M", realValue: 1e6 },
  { label: "$1 - 10M", value: "$1 - 10M", realValue: 1e7 },
  { label: "$10 - 50M", value: "$10 - 50M", realValue: 5 * 1e7 },
  { label: "$50 - 100M", value: "$50 - 100M", realValue: 10 * 1e7 },
  { label: "$100 - 250M", value: "$100 - 250M", realValue: 25 * 1e7 },
  { label: "$250 - 500M", value: "$250 - 500M", realValue: 50 * 1e7 },
  { label: "$500M - 1B", value: "$500M - 1B", realValue: 100 * 1e7 },
  { label: "> $1B", value: "> $1B", realValue: 1000 * 1e7 },
];

export const industryList = [
  { label: "Agriculture & Mining", value: "Agriculture & Mining" },
  { label: "Business Services", value: "Business Services" },
  { label: "Computers & Electronics", value: "Computers & Electronics" },
  { label: "Consumer Services", value: "Consumer Services" },
  { label: "Education", value: "Education" },
  { label: "Energy & Utilities", value: "Energy & Utilities" },
  { label: "Financial Services", value: "Financial Services" },
  { label: "Government", value: "Government" },
  {
    label: "Healthcare, Pharmaceuticals, & Biotech",
    value: "Healthcare, Pharmaceuticals, & Biotech",
  },
  { label: "Manufacturing", value: "Manufacturing" },
  { label: "Media & Entertainment", value: "Media & Entertainment" },
  { label: "Non-Profit", value: "Non-Profit" },
  { label: "Other", value: "Other" },
  { label: "Real Estate & Construction", value: "Real Estate & Construction" },
  { label: "Retail", value: "Retail" },
  { label: "Software & Internet", value: "Software & Internet" },
  { label: "Telecommunications", value: "Telecommunications" },
  { label: "Transportation & Storage", value: "Transportation & Storage" },
  {
    label: "Travel, Recreation, and Leisure",
    value: "Travel, Recreation, and Leisure",
  },
  { label: "Wholesale & Distribution", value: "Wholesale & Distribution" },
];

export const CONTACT_LIST_TYPE = {
  CHROME_EXTENSION: "chromeExt",
  LIVE_SEARCH: "livesearch",
  KOMPASS_SEARCH: "kompasssearch",
};
