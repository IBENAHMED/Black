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


    // console.log(camera.position)
    // const { cameraPosition, scenePosition, sceneRotation }: any = useControls({
    //     cameraPosition: {
    //         x: 4, y: 0, z: 0
    //     },
    //     scenePosition: {
    //         x: -100, y: -150, z: 0
    //     },
    //     sceneRotation: {
    //         x: 0, y: 0, z: 0
    //     }
    // });

    // useFrame(() => {
    //     camera.position.x = cameraPosition.x;
    //     camera.position.y = cameraPosition.y;
    //     camera.position.z = cameraPosition.z;

    //     scene.position.x = scenePosition.x;
    //     scene.position.y = scenePosition.y;
    //     scene.position.z = scenePosition.z;

    //     scene.rotation.x = sceneRotation.x;
    //     scene.rotation.y = sceneRotation.y;
    //     scene.rotation.z = sceneRotation.z;
    // });

    // useEffect(() => {
    //     camera.position.x = 4;
    //     camera.position.y = 0;
    //     camera.position.z = 0;

    //     scene.position.x = -100;
    //     scene.position.y = -150;
    //     scene.position.z = 0;

    //     scene.rotation.x = 0;
    //     scene.rotation.y = 0;
    //     scene.rotation.z = 0;
    // }, [])

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
            <Html position={[-8.5, 3, 0]}>
                <section style={{ width: "1300px" }}>
                    <Hero />
                </section>
                <section style={{ width: "1300px" }}>
                    <FeaturedCourses />
                </section>
                <section style={{ width: "1300px" }}>
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
            </Html>
        </group >
    );
}

export default function Home() {

    return (
        <main className="h-screen">
            <div className="h-screen w-full fixed top-0 z-10 hidden lg:block">
                <Canvas>
                    <directionalLight position={[-5, -5, 5]} intensity={4} />
                    <ambientLight />
                    <ScrollControls damping={0.5} pages={6} >
                        <Index />
                    </ScrollControls>
                </Canvas>
            </div>
        </main>

    );
}
