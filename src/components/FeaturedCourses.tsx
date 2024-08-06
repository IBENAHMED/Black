"use client";
import React from 'react'
import Link from 'next/link'
import { properties } from "../data/propeties"
import { BackgroundGradient } from './ui/background-gradient'

function FeaturedCourses() {

  interface property {
    title: string,
    description: string,
    slug: string
  }

  return (
    <div className='max_width_sc p-6 m-2'>
      <div className='p-4 pt-3'>
        <h2 className='text-center text-md md:text-2xl pt-3'>FEATURED COURSES</h2>
        <p className='text-center text-3xl md:text-5xl font-bold'>Learn with the best</p>

      </div>

      <div className='m-4 me-10 flex justify-center'>
        <div className='Box'>
          {properties.map((item: property) => (
            <div className='flex flex-wrap justify-center py-3' key={item.slug}>
              <BackgroundGradient className='flex flex-wrap flex-col bg-white dark:bg-zinc-900 overflow-hidden h-full rounded-[22px] max-w-sm'>
                <div className='p-4 flex flex-wrap flex-col justify-center gap-3'>
                  <p className='text-2xl font-semibold text-center'>{item.title} </p>
                  <p className='text-center'>{item.description} </p>
                  <div className='text-center'> <Link href={`/courses/${item.slug}`} className='px-5 py-2  bg-slate-50 text-black rounded-lg'>Learn more </Link></div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedCourses