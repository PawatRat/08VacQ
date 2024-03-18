'use client'
import { Plaster } from "next/font/google";
import  VideoPlayer from "./VideoPlayer";
import { useState } from "react";

export default function PromoteCard() {

    const [playing , setPlaying] = useState(true);
    return (
        <div className="w-[80%] shadow-md mx-[10%] my-10 p-2 m-3 rounded-lg bg-gray-100 flex gap-3 flex-row">
            <VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing}></VideoPlayer>
            <div>
                Get Your Vaccine Today
                <button className="block bg-cyan-500 text-white border border-transparent font-semibold py-2 px-2 m-2
                    hover:bg-white hover:text-cyan-600 border-cyan-600 rounded-md shadow-lg shadow-blue-500/50" 
                    onClick={()=>(setPlaying(!playing)) }>
                        { playing ? "Pause" : "Play"}
                </button>


            </div>
        </div>
    )
}