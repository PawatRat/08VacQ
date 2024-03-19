'use client'

import { useRef , useEffect} from "react";
import { useWindowListener } from "@/hooks/useWindowListener";


export default function VideoPlayer( {vdoSrc, isPlaying} : {vdoSrc: string, isPlaying: boolean} ) {
    const vdoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (isPlaying) {
            vdoRef.current?.play();
        } else {
            vdoRef.current?.pause();
        }
    }, [isPlaying]);

    useWindowListener("resize", (e)=>{alert("Window Resized" + (e.target as Window).innerWidth) });
  return (
    <video src={vdoSrc} className="w-[40%]"  ref={vdoRef} controls loop muted />
  );
}