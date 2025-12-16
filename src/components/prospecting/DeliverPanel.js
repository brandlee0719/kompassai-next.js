import { useState } from "react";
import TabBar1 from "../common/TabBar1";
import BaseContainer from "../BaseContainer";
import { pageContentWidth } from "@/utils/common";
import Text from "../Text";

export default function DeliverPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="">
      <div className="p-[24px] sm:p-[48px] md::p-[80px] bg-white">
        <BaseContainer width={pageContentWidth}>
          <div className="w-[300px] md:w-[550px] h-[171px] ">
            <div className="w-[200px] font-Outfit flex items-center justify-center p-[10px_16px] text-md font-[400] rounded-full text-magenta-500 bg-white">
              DATA ANALYST
            </div>
            <Text variant="Header3" className="text-stone-950 mt-6">
              Deliver safe, reliable,self-
              <br />
              service analytics
            </Text>
          </div>
          <TabBar1 />
        </BaseContainer>
      </div>
    </div>
  );
}
