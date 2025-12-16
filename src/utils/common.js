import { v4 as uuid } from "uuid";
import Papa from "papaparse";

import DownSVGIcon from "@/assets/image/icons/down.svg";
import SettingIcon from "@/assets/image/profile-popup/setting.svg";
import TeamIcon from "@/assets/image/profile-popup/team_management.svg";
import InviteIcon from "@/assets/image/profile-popup/invite.svg";
import IntegrationIcon from "@/assets/image/profile-popup/integration.svg";
import AnalysticsIcon from "@/assets/image/profile-popup/analytics.svg";
import HelpIcon from "@/assets/image/profile-popup/help.svg";
import HotelClassSVGIcon from "@/assets/image/profile-popup/icon-hotel-class.svg";

import GetStartedIcon from "@/assets/image/guide-popup/icon-getstarted.svg";
import SubmitIcon from "@/assets/image/guide-popup/icon-submit.svg";

export const pageContentWidth = 1680;

export const navList = [
  { label: "Pricing", icon: null, router: "/pricing" },
  { label: "Product", icon: DownSVGIcon, router: "/prospecting" },
  { label: "Resources", icon: DownSVGIcon, router: "/aboutme" },
  { label: "Customer Stories", icon: null, router: "/faq" },
];

export const mainNavList = [
  // { label: "Live Search", icon: null, router: "/livesearch" },
  { label: "Search Kompass", icon: null, router: "/search" },
  { label: "List", icon: null, router: "/list" },
  { label: "Bulk Enrich", icon: null, router: "/bulkenrich" },
  { label: "Email Validation", icon: null, router: "/email-validation" },
];

export const profilePopupNavList = [
  { label: "Account & Settings", icon: SettingIcon, router: "/settings" },
  { label: "Team Management", icon: TeamIcon, router: "/team" },
  // { label: "Invite team member", icon: InviteIcon, router: "/invite" },
  { label: "Integrations", icon: IntegrationIcon, router: "/integrate" },
  { label: "Analytics", icon: AnalysticsIcon, router: "/analytics" },
  { label: "Upgrade Plan", icon: HotelClassSVGIcon, router: "/upgrade" },
];

export const guidePopupNavList = [
  { label: "Help Center", icon: HelpIcon, router: "/" },
  { label: "Get started guide", icon: GetStartedIcon, router: "/" },
  { label: "Submit a ticket", icon: SubmitIcon, router: "/" },
];

export const LandingHeaderColor = {
  white: "#FFF",
  green: "#75EED9",
};

export const menuProductList = [
  { label: "Linkedin Prospecting Tool", icon: null, router: "/prospecting" },
  { label: "Email Verification", icon: null, router: "/emailverification" },
  { label: "Advanced Database Search", icon: null, router: "/advancedsearch" },
  { label: "CSV Export", icon: null, router: "/csvexport" },
  { label: "Integration", icon: null, router: "/intergration" },
];

export const menuResourceLearnList = [
  { label: "Webinars", icon: null, router: "/article" },
  { label: "Blog", icon: null, router: "/blog" },
  { label: "FAQ", icon: null, router: "/faq" },
  { label: "Revenue Calculator for Sales", icon: null, router: "#" },
];
export const menuResourcePartnerList = [
  { label: "Kompass Advocate", icon: null, router: "#" },
  { label: "Affiliate model", icon: null, router: "#" },
  { label: "Refer a friend", icon: null, router: "#" },
];

export const bulkEnrichTemplateHeader = {
  linkedin: ["LinkedinURLs"],
  search: ["Name", "Company", "Location"],
};

export function hexToRGB(hex, alpha) {
  // Remove the # symbol if it's included
  hex = hex.replace("#", "");

  // Parse the hex values to integers
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Ensure the alpha value is between 0 and 100
  alpha = Math.min(Math.max(alpha, 0), 100);

  // Create the rgba string
  return `rgb(${r} ${g} ${b} / ${alpha}%)`;
}

export function getUUID() {
  const unique_id = uuid();
  return unique_id;
}

export function getShortName(userName) {
  try {
    let name = userName;
    let array = name.split(" ");
    if (array.length == 0) return "";
    if (array.length == 1) return array[0][0].toUpperCase();
    if (array.length == 2) return (array[0][0] + array[1][0]).toUpperCase();
    if (array.length >= 3)
      return (array[0][0] + array[1][0] + array[2][0]).toUpperCase();
  } catch (error) {
    return "";
  }
}

export function indexString(string, n = 5) {
  // takes a string and encodes it as number between 0 and n
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    var charCode = string.charCodeAt(i);
    hash += charCode;
  }
  var index = hash % n;

  return index;
}

export function downloadKompassProfilesCSV(fileName, content) {
  const csvContent = [],
    headerItem = ["No"];

  headerItem.push(
    "First Name",
    "Last Name",
    "Title",
    "Level",
    "City",
    "State",
    "Country",
    "Linkedin",
    "Twitter",
    "Facebook",
    "Company Name",
    "Company Website",
    "Company PhoneNumber",
    "Company Street",
    "Company City",
    "Company State",
    "Company Country",
    "Company Zipcode",
    "Company Industry",
    "Company HeadCount",
    "Company Revenue",
    "Emails",
    "Phones",
  );

  csvContent.push(headerItem);

  content.forEach((item, index) => {
    const record = [];

    if (item?.validPhones)
      item.validPhones = item?.validPhones?.map((phone) => phone.phoneNumber);
    if (item?.validEmails)
      item.validEmails = item?.validEmails?.map((email) => email.email);
    if (item?.company?.phoneNumber)
      item.company.phoneNumber = item?.company?.phoneNumber?.map(
        (phone) => phone.number,
      );

    record.push(
      index + 1,
      item?.firstName,
      item?.lastName,
      item?.title,
      item?.level,
      item?.city,
      item?.state,
      item?.country,
      item?.linkedin,
      item?.twitter,
      item?.facebook,
      item?.company?.name,
      item?.company?.website,
      item?.company?.phoneNumber?.join(","),
      item?.company?.street,
      item?.company?.city,
      item?.company?.state,
      item?.company?.country,
      item?.company?.zipcode,
      item?.company?.industry,
      item?.company?.headCount,
      item?.company?.revenue,
      item?.validEmails?.join(","),
      item?.validPhones?.join(","),
    );

    csvContent.push(record);
  });

  const csv = Papa.unparse(csvContent);

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${fileName}.csv`;
  link.click();
}

export function downloadKompassCompaniesCSV(fileName, content) {
  const csvContent = [],
    headerItem = ["No"];

  headerItem.push(
    "Name",
    "Website",
    "City",
    "State",
    "Country",
    "Zipcode",
    "Linkedin",
    "Twitter",
    "Facebook",
    "Industry",
    "HeadCount",
    "Revenue",
    "Phonenumber",
  );

  csvContent.push(headerItem);

  content.forEach((item, index) => {
    const record = [];

    if (item?.phoneNumber)
      item.phoneNumber = item?.phoneNumber?.map((phone) => phone.number);

    record.push(
      index + 1,
      item?.name,
      item?.website,
      item?.city,
      item?.state,
      item?.country,
      item?.zipcode,
      item?.linkedin,
      item?.twitter,
      item?.facebook,
      item?.industry,
      item?.headCount,
      item?.revenue,
      item?.phoneNumber,
    );

    csvContent.push(record);
  });

  const csv = Papa.unparse(csvContent);

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${fileName}.csv`;
  link.click();
}

export function mergeKompassEmails(emails) {
  return [
    ...(emails?.workEmails
      ? emails?.workEmails.map((item) => {
          return { ...item, type: "Valid" };
        })
      : []),
    ...(emails?.personalEmails
      ? emails?.personalEmails.map((item) => {
          return { ...item, type: "Personal" };
        })
      : []),
    ...(emails?.riskyEmails
      ? emails?.riskyEmails.map((item) => {
          return { ...item, type: "Risky" };
        })
      : []),
    ...(emails?.unknownEmail
      ? emails?.unknownEmail.map((item) => {
          return { ...item, type: "Unknown" };
        })
      : []),
    ...(emails?.doNotEmails
      ? emails?.doNotEmails.map((item) => {
          return { ...item, type: "Do not email" };
        })
      : []),
  ];
}
