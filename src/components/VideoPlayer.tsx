'use client'

import { useRef , useEffect} from "react";


export default function VideoPlayer( {vdoSrc, isPlaying} : {vdoSrc: string, isPlaying: boolean} ) {
    const vdoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (isPlaying) {
            vdoRef.current?.play();
        } else {
            vdoRef.current?.pause();
        }
    });
  return (
    <video src={vdoSrc} className="w-[40%]"  ref={vdoRef} controls loop muted />
  );
}