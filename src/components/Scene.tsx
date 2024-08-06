"use client";
import { useEffect, useRef, useState } from "react";
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
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, ScrollControls, useAnimations, Html, useGLTF, useScroll } from "@react-three/drei";
import { useControls } from "leva"

let Index = () => {

    let background = useGLTF("/robot_playground.glb");
    let { camera, scene } = useThree();
    let { actions, names } = useAnimations(background.animations, background.scene);
    const scroll = useScroll();

    const mesh: any = useRef(null);

    useEffect(() => {
        console.log(actions)
        //@ts-ignore
        actions["Experiment"].play().paused = true;
    }, []);

    // useFrame: Runs on every frame ====> Updates the animation time based on the scroll position. The scroll.offset value is mapped to the animation duration, making the animation progress in sync with the scroll.
    useFrame(
        () =>
        //@ts-ignore
        (actions["Experiment"].time =
            //@ts-ignore
            (actions["Experiment"].getClip().duration * scroll.offset) / 1)
    );


    return (
        <group ref={mesh} >
            <primitive object={background.scene} />
            <Html>
                <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-60">
                    <section style={{ width: "1300px" }}>
                        <Hero />
                    </section>
                    <section style={{ width: "1300px" }}>
                        <FeaturedCourses />
                    </section>
                    <section className="Up" style={{ width: "1300px" }}>
                        <WhyChooseUs />
                    </section>
                    <section style={{ width: "1300px" }}>
                        <TestimonialCard />
                    </section>
                    <section style={{ width: "1300px" }}>
                        <UpcomingWebinar />
                    </section>
                    <section style={{ width: "1300px" }}>
                        <Instructor />
                    </section>
                </div>
            </Html>
        </group >
    );
}

export default function Home() {

    return (
        <Canvas>
            <directionalLight position={[-5, -5, 5]} intensity={4} />
            <ambientLight />
            <ScrollControls damping={0.5} pages={5} >
                <Index />
            </ScrollControls>
        </Canvas>
    );
}
