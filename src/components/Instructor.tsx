"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
function Instructor() {

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    }
  ];

  return (
    <div className='relative overflow-hidden flex justify-center items-center my-7'>
      <WavyBackground className="">
        <div className="Footer flex justify-center flex-col gap-6 sm:m-4 px-2">
          <h2 className="text-4xl sm:text-5xl text-center font-bold">Meet Our Instructor</h2>
          <div className="flex justify-center flex-wrap pl-2"> <p className="sm:max-w-[500px] w-full p-2 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sed ullam accusantium natus a error adipisci dignissimos nostrum non doloremque, quidem perferendis, atque provident tenetur. Aperiam aliquid est facilis delectus.</p></div>
        </div>
        <div className="flex-row items-center justify-center flex">
          <AnimatedTooltip items={people} />
        </div>

      </WavyBackground>
    </div>
  )
}



export default Instructor