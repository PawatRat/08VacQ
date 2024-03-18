import Image from "next/image"
import InteractiveCard from "./InteractiveCard"
import Rating from '@mui/material/Rating';
import React from 'react';
import { useState } from 'react';

export default function Card( {hospitalName , imgSrc , onCompare, setRate } : {hospitalName : string, imgSrc : string, onCompare : Function, setRate: Function} ) {

    return (
        <InteractiveCard contentName={hospitalName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='vaccine'
                fill={true}
                className='object-cover rounded-t-lg' 
                />
            </div>
            <div className='w-full h-[15%] p-[10px]'>{hospitalName}</div>
            <Rating className="p-[10px]"
                name= {`${hospitalName} Rating`}
                id = {`${hospitalName} Rating`}
                data-testid = {`${hospitalName} Rating`}
                defaultValue = {5}
                onChange={(e, newValue) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setRate(hospitalName,newValue);
                    }}
                    onClick={(e)=>{
                        e.stopPropagation();
                    }}

                
            />

            {/* <div className="flex flex-col items-center  h-[10%]">
                <button className="bg-cyan-500 block text-sm rounded-md mx-2 px-3 py-1.5 my-5 text-white shadow-md" 
                onClick={ (e)=>{e.stopPropagation(); onCompare(hospitalName) } }>Compare</button>
            </div> */}
        </InteractiveCard>
    )
}