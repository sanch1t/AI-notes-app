"use client";
import TypewriterTitle from "@/components/TypewriterTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-200 to-teal-200 grain">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 font-montserrat -translate-y-1/2">

        <h1 className="text-7xl text-center font-mont font-200"><span className="text-gradient">wrAIte</span>, by Sanchit.
        </h1>

        <div className="mt-4"></div>
        <h2 className="font-mont font-300 text-3xl text-center text-slate-700">
          an AI note taker with <br/>
          <TypewriterTitle/>
        </h2>
        <div className="mt-8"></div>

        <div className="flex justify-center">  
          <Link href="/dashboard">
            <Button className="bg-gradient font-mont ">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3}/>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
  
}