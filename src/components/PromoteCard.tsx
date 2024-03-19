'use client'
import { Plaster } from "next/font/google";
import  VideoPlayer from "./VideoPlayer";
import { useState } from "react";
import { useWindowListener } from "@/hooks/useWindowListener";

export default function PromoteCard() {

    const [playing , setPlaying] = useState(true);

    useWindowListener("contextmenu", (e)=> {
        e.preventDefault();
    });

    return (
        <div className="w-[80%] shadow-md mx-[10%] my-10 p-2 m-3 rounded-lg bg-gray-100 flex gap-3 flex-row">
            <VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing}></VideoPlayer>
            <div className="flex flex-col">
                <h3>Get Your Vaccine Today </h3>
                <div className="flex-grow"></div>
                <button className="block bg-cyan-500 text-white border border-transparent font-semibold py-2 px-2 m-3
                    hover:bg-white hover:text-cyan-600 border-cyan-600 rounded-md shadow-lg shadow-blue-500/50 w-[100px]" 
                    onClick={()=>(setPlaying(!playing)) }>
                        { playing ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    )
}