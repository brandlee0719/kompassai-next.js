import { useHTTPRequest } from "@/hooks/useHTTPRequest";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import UsageBar from "./UsageBar";

export default function SummaryComponent() {
  const getUsageData = useHTTPRequest("/credits/getUserCreditsUsed?", "GET");

  const { data } = useQuery({
    queryKey: ["CreditsUsage"],
    queryFn: () => getUsageData(),
  });

  const getCreditsPercent = (obj) => {
    if (!obj) return 0;
    const { used, available, total } = obj;
    return Math.floor((total / available) * 100);
  };

  const creditsData = useMemo(() => {
    if (!data) return null;
    const { emails, phones, validations } = data.data;
    return {
      phones: {
        percent: getCreditsPercent(phones),
        used: phones.total,
        total: phones.available + phones.total,
      },
      emails: {
        percent: getCreditsPercent(emails),
        used: emails.total,
        total: emails.available + emails.total,
      },
      validations: {
        percent: getCreditsPercent(validations),
        used: validations.total,
        total: validations.available + validations.total,
      },
    };
  }, [data]);

  return (
    <div className="flex w-full flex-col items-center justify-start gap-4 pb-8 pl-10 pr-6 pt-6 md:pl-16">
      <div className="font-Outfit leading-relaxed self-stretch text-xl text-black">
        Summary
      </div>

      <div className="flex w-full flex-col items-center justify-start gap-2 ">
        <div className="flex flex-col items-center justify-start gap-2 self-stretch">
          <div className="font-Outfit leading-tight self-stretch text-sm font-normal text-stone-350">
            Your plan
          </div>
          <div className="flex h-12 flex-col items-start justify-start gap-2 self-stretch">
            <div className="font-Outfit leading-snug text-base font-medium text-black">
              Free
            </div>
            <div className="inline-flex items-start justify-start gap-2 self-stretch">
              <div className="font-Outfit leading-none text-xs font-normal text-stone-350">
                Renewal on
              </div>
              <div className="font-Outfit leading-none shrink grow basis-0 text-xs font-normal text-black">
                Oct 27, 2023 11:41 AM
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-2 h-px w-full border-0 bg-stone-250" />
        <div className="flex flex-col items-center justify-start gap-2 self-stretch">
          <div className="font-Outfit leading-tight self-stretch text-sm font-normal text-stone-350">
            Team members
          </div>
          <div className="flex h-12 flex-col items-start justify-start gap-2 self-stretch">
            <div className="font-Outfit leading-snug text-base font-medium text-black">
              1 / 1
            </div>
            <button className="font-Outfit leading-tight cursor-pointer text-sm font-normal text-blue-500">
              Upgrade to invite members
            </button>
          </div>
        </div>
        <hr className="mb-2 h-px w-full border-0 bg-stone-250" />
        <div className="flex flex-col items-center justify-start gap-2 self-stretch border-b">
          <div className="font-Outfit leading-tight self-stretch text-sm font-normal text-stone-350">
            Credits
          </div>
          {creditsData && (
            <>
              <UsageBar value={creditsData.phones} type={"Phones"}></UsageBar>
              <UsageBar value={creditsData.emails} type={"Emails"}></UsageBar>
              <UsageBar
                value={creditsData.validations}
                type={"Validation"}
              ></UsageBar>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
