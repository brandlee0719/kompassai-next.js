import { ReactComponent as SalesforceSVG } from "@/assets/image/integrations/salesforce.svg"
import { ReactComponent as HubspotSVG } from "@/assets/image/integrations/hubspot.svg"
import { ReactComponent as OutreachSVG } from "@/assets/image/integrations/outreach.svg"
import { ReactComponent as PipedriveSVG } from "@/assets/image/integrations/pipedrive.svg"
import { ReactComponent as ZapierSVG } from "@/assets/image/integrations/zapier.svg"
import { ReactComponent as ZohoSVG } from "@/assets/image/integrations/zoho.svg"


export default function ConnectorPanel(props) {

  return (
  <div className="w-full py-24 px-12 space-y-6">
    <div className="grid grid-cols-3">
      <div className="rounded-l-xl border border-stone-250 bg-white px-6 py-4">
        <div className="flex gap-6 pb-4 border-b border-stone-250">
          <SalesforceSVG className="h-12"/>
          <div className="font-Outfit text-xl text-stone-950 pt-2">
            Salesforce
          </div>
        </div>
        <div className="font-Outfit text-md text-stone-950 mt-6">
          Connect with Salesforce to bulk export and manage prospects while associating companies and contacts with conversations.
        </div>
      </div>
      
      <div className="border-y border-stone-250 bg-white px-6 py-4">
        <div className="flex gap-6 pb-4 border-b border-stone-250">
          <HubspotSVG className="h-12" />
          <div className="font-Outfit text-xl text-stone-950 pt-2">
            Hubspot
          </div>
        </div>
        <div className="font-Outfit text-ms text-stone-950 mt-6">
          Integrate with Hubspot to get unparalleled visibility into how your reps are interacting with potential prospects and customers.
        </div>
      </div>
      
      <div className="rounded-r-xl border border-stone-250 bg-white px-6 py-4">
        <div className="flex gap-6 pb-4 border-b border-stone-250">  
          <OutreachSVG className="h-12"/>
          <div className="font-Outfit text-xl text-stone-950 pt-2">
            Outreach
          </div>
        </div>
        <div className="font-Outfit text-md text-stone-950 mt-6">
          Want to streamline your customer engagement? Integrate with Outreach to bulk export prospect data into automated sequences.
        </div>
      </div>
    </div>


    <div className="grid grid-cols-3">
      <div className="rounded-l-xl border border-stone-250 bg-white px-6 py-4">
        <div className="flex gap-6 pb-4 border-b border-stone-250">
          <PipedriveSVG className="h-12"/>
          <div className="font-Outfit text-xl text-stone-950 pt-2">
            Pipedrive
          </div>
        </div>
        <div className="font-Outfit text-md text-stone-950 mt-6">
          Integrate with Pipedrive to connect customer data with CRM data, and enjoy additional insights on your sales flow.
        </div>
      </div>
      
      <div className="border-y border-stone-250 bg-white px-6 py-4">
        <div className="flex gap-6 pb-4 border-b border-stone-250">
          <ZapierSVG className="h-12" />
          <div className="font-Outfit text-xl text-stone-950 pt-2">
            Zapier
          </div>
        </div>
        <div className="font-Outfit text-ms text-stone-950 mt-6">
          Connect with Zapier to automate your business processes. Bulk enrich leads with Zapier and optimize all your workflows.
        </div>
      </div>
      
      <div className="rounded-r-xl border border-stone-250 bg-white px-6 py-4">
        <div className="flex gap-6 pb-4 border-b border-stone-250">  
          <ZohoSVG className="h-12"/>
          <div className="font-Outfit text-xl text-stone-950 pt-2">
            Zoho CRM
          </div>
        </div>
        <div className="font-Outfit text-md text-stone-950 mt-6">
          Integrate with Zoho to save more relevant leads to your Zoho database and convert more leads into opportunities with ease.
        </div>
      </div>
    </div>
  </div>
  );
}