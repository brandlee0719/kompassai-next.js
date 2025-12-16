import {ReactComponent as Checkmark} from '@/assets/image/icons/checkbox_circle.svg'

const points = {
	row1: ["name", "company", "job title", "location", "work email"], 
	row2: ["personal email", "phone number", "more"]
}
;


export default function Datapoints({background, opacity}) {

	return (
		<div className="flex flex-col w-full bg-white gap-8 pb-16 pt-6">
			<div className="font-OutfitBold text-[3rem] text-stone-950 text-center">What data do I get?</div>
			<div className="flex flex-col space-y-4">
				<div className="font-Outfit text-stone-950 uppercase text-md flex items-center justify-center">
					<div className="flex gap-4">
						{points.row1.map((item, ind) => {
				            return (
				            	<div className={`flex rounded-full ${background} ${opacity} px-2 py-1 gap-1 items-center`}>
					            	<Checkmark className="flex h-4"/>
					            	<div className="pr-1">{item}</div>
				            	</div>
				            );
				        })}
					</div>
				</div>
				<div className="font-Outfit text-stone-950 uppercase text-md flex items-center justify-center">
					<div className="flex gap-4">
						{points.row2.map((item, ind) => {
				            return (
				            	<div className={`flex rounded-full ${background} ${opacity} px-2 py-1 gap-1 items-center`}>
					            	<Checkmark className="flex h-4"/>
					            	<div className="pr-1">{item}</div>
				            	</div>
				            );
				        })}
					</div>
				</div>
			</div>
		</div>
	)
}
