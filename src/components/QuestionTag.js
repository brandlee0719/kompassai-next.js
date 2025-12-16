import { useState, useEffect } from 'react';
import { Button } from '@material-tailwind/react'
import DownBtnIcon from '../assets/image/icons/downBtn.svg'
export default function QuestionTag(props) {
    const [showContent, setShowContent] = useState(false);
    const handleShowContent = () => {
        setShowContent(!showContent);
    }
    return (
        <div className='z-0'>

            {showContent == true ?
                <>
                    <div className='flex flex-row justify-center p-[24px] bg-[#FFF] w-[260px] md:w-[800px] h-[500px] rounded-[16px] z-0 mt-[20px]'>
                        < div className='w-full text-start text-[16px] md:text-[26px] h-[255px] font-Outfit  text-[#090C05] font-[700] ' >
                            What are KompassAI credits ?
                        </div >
                        <button onClick={handleShowContent} className='flex justify-start'>
                            <img src={DownBtnIcon} width={26} height={26} style={{ transform: 'rotate(180deg)' }} />
                        </button>
                    </div >
                </>
                :
                <div className='flex flex-row justify-center p-[24px] bg-[#FFF] w-[260px] md:w-[800px] h-[80px] rounded-[16px] z-0 mt-[20px]'>
                    <div className='w-full text-start text-[16px] md:text-[26px] h-[255px] font-Outfit  text-[#090C05] font-[700] '>
                        What are KompassAI credits?
                    </div>
                    <button onClick={handleShowContent}>
                        <img src={DownBtnIcon} width={26} height={26} />
                    </button>
                </div>}
        </div>

    )
}