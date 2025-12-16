import { useState, useEffect } from 'react';
import ReebokIcon from '../../assets/image/customers/Reebok.svg'
import SubwayIcon from '../../assets/image/customers/Subway.svg'
import InterComIcon from '../../assets/image/customers/Intercom.svg'
import RevoludtIcon from '../../assets/image/customers/Revolut.svg'
import NotionIcon from '../../assets/image/customers/Notion.svg'
import RedbullIcon from '../../assets/image/customers/Redbull.svg'
import Forever21Icon from '../../assets/image/customers/Forever21.svg'
import LinkedInIcon from '../../assets/image/customers/LinkedIn.svg'
import BaseContainer from '../BaseContainer';
import { pageContentWidth } from '@/utils/common';

export default function SupportBar(props) {
    return (
        <BaseContainer width={pageContentWidth}>
        <div className='flex flex-wrap w-full justify-center md:justify-between py-[64px]'>
            <img className='w-[100px] sm:w-[120px] md:w-[140px] mt-[20px] mx-[10px]' src={ReebokIcon} />
            <img className='w-[100px] sm:w-[120px] md:w-[140px] mt-[20px] mx-[10px]' src={SubwayIcon} />
            <img className='w-[100px] sm:w-[120px] md:w-[140px] mt-[20px] mx-[10px]' src={InterComIcon} />
            <img className='w-[100px] sm:w-[120px] md:w-[140px] mt-[20px] mx-[10px]' src={RevoludtIcon} />
            <img className='w-[100px] sm:w-[120px] md:w-[140px] mt-[20px] mx-[10px]' src={NotionIcon} />
            <img className='w-[100px] sm:w-[120px] md:w-[140px] mt-[20px] mx-[10px]' src={RedbullIcon} />
            <img className='w-[100px] sm:w-[120px] md:w-[140px] mt-[20px] mx-[10px]' src={Forever21Icon} />
            <img className='w-[100px] sm:w-[120px] md:w-[140px] mt-[20px] mx-[10px]' src={LinkedInIcon} />
        </div>
        </BaseContainer>
    )
}
