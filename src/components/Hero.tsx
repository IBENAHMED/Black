import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "@/components/ui/moving-border";
function Hero() {
  return (
    <div className="max_width_sc flex justify-center items-end py-6 w-full h-[750px] m-4">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="w-full md:max-w-[70%]">
        <h1 className="text-center sm:text-7xl text-5xl font-bold bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 text-transparent">Master the Art of Music</h1>
        <p className="text-center p-3 m-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, molestias recusandae. Tempora ratione dolor commodi ipsa totam eos possimus, nulla enim eveniet minima quasi eius, et quam cumque? Blanditiis, necessitatibus. Expedita, consectetur ?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, molestiae libero modi delectus harum nostrum similique eius reiciendis tempora officiis consectetur itaque aut! Non maxime, culpa provident dignissimos voluptate ipsam!</p>
        <div className="text-center">
          <Link href="/courses">
            <Button className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;