import { ReactComponent as ConnectorSVG } from "@/assets/image/integrations/connector.svg"

export default function HoursSavedPanel(props) {

  return (
  <div className="w-full px-12 bg-stone-150 flex mt-12">
    <div className="font-Outfit text-[2.25rem] text-stone-950 w-5/12 py-24">
      Clients save on average <span className="font-OutfitBold"> 50+ hours a month </span> on prospecting by integrating KompassAI into their CRM and Outreach workflows!
    </div>
    <div className="w-7/12 flex flex-row-reverse py-12">
    	<ConnectorSVG className="h-[20rem]"/>
    </div>
  </div>
  );
}