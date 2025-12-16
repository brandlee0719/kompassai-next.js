import { useState, useEffect } from 'react';

import SearchIcon from '../../../assets/image/icons/Search.png'

export default function SearchBar(props) {
    return (
        <div className='flex flex-row p-[15px_18px_15px_24px] rounded-[40px] items-center bg-white w-full md:w-[744px] mt-[40px] mb-[24px]'>
            <img src={SearchIcon} alt='search' className='w-[12px] h-[12px]' />
            <input className='rounded-xl outline-none pl-[16px] font-Outfit font-[300px] text-[16px] w-full' placeholder='Search' />
        </div>
    )
}
