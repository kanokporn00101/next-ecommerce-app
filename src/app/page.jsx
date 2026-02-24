"use client"
import Image from "next/image";
import Clock from "@/components/Clock";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-160 gap-5">
      <Counter/>
      <Clock/>
    </div>
  );
}
