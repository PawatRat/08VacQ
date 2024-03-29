'use client'
import React from "react"
import Image from "next/image"

export default function Card( { children, contentName } : {children : React.ReactNode, contentName : string} ) {
    function onHospitalSelected() {
        // alert("You Selected " + contentName)
    }

    function onCardMouseACtion(event: React.SyntheticEvent) {
        if (event.type === 'mouseover') {
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.add('shadow-2xl');
        } else {
            event.currentTarget.classList.remove('shadow-2xl');
            event.currentTarget.classList.add('shadow-lg');
        }
    }

    return (
        <div className='w-full h-[400px] rounded-lg shadow-lg bg-white bg-neutral-200' 
        onMouseOver={(e)=>onCardMouseACtion(e)}
        onMouseOut={(e)=>onCardMouseACtion(e)}>
            {children}
        </div>
    )
}