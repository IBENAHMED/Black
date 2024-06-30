"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinar from "../components/UpcomingWebinar";
import Instructor from "@/components/Instructor";

export default function Home() {



  return (
      <main>
        <section>
          <Hero/>
        </section>
        <section>
          <FeaturedCourses/>
        </section>
        <section>
          <WhyChooseUs/>
        </section>
        <section>
          <TestimonialCard/>
        </section>
        <section>
          <UpcomingWebinar/>
        </section>
        <section>
          <Instructor/>
        </section>
      </main>

  );
}
