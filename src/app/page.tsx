import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-200 to-teal-200 grain">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 font-montserrat -translate-y-1/2">

        <h1 className="text-5xl text-center font-mont font-200"><span className="text-gradient">wrAIte</span>, by Sanchit.
        </h1>

        <div className="mt-4"></div>
        <h2 className="font-mont font-300 text-2xl text-center text-slate-700">
          an AI note taker
        </h2>


      </div>
    </div>
  )
  
}