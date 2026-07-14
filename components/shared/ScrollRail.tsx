"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

export function ScrollRail({ children, className }: { children: ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null); const [progress,setProgress]=useState(0);
  useEffect(()=>{const update=()=>{const node=ref.current;if(!node)return;const rect=node.getBoundingClientRect();const distance=rect.height+window.innerHeight;setProgress(Math.max(0,Math.min(1,(window.innerHeight-rect.top)/distance)));};update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update);},[]);
  return <div ref={ref} className={className} style={{"--rail-progress":progress} as CSSProperties}>{children}</div>;
}
