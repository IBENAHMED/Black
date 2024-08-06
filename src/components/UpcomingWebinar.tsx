import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
function UpcomingWebinar() {
  return (
    <div className="max_width_sc p-6 m-2">
      <div className='p-4 pt-3'>
        <h2 className='text-center text-md md:text-2xl pt-3'>FEATURED COURSES</h2>
        <p className='text-center text-3xl md:text-5xl font-bold'>Learn with the best</p>
      </div>

      <div className="max_width_sc Box">
        <HoverEffect items={projects} />
      </div>

      <div className='text-center py-5'>
        <Link href={"/courses"} className='px-5 py-2 bg-slate-50 text-black rounded-lg'>
          View All
        </Link>
      </div>

    </div>
  )
}

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export default UpcomingWebinar