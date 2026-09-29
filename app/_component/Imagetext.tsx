import React from 'react'

interface ImagetextProps {
  url: string
}

const Imagetext = ({ url }: ImagetextProps) => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-20 w-full max-w-6xl mx-auto py-12 sm:py-16 lg:py-24 px-4 sm:px-6'>
      {/* Image Container */}
      <div className='w-full lg:w-1/2 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/80 shadow-md bg-zinc-100'>
        <img
          src={url}
          alt="Showcase preview"
          className='object-cover w-full h-full transition-transform duration-500 hover:scale-105'
        />
      </div>

      {/* Content Container */}
      <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6'>
        <p className='text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl'>
          Passionate about crafting intuitive digital experiences, responsive design systems, and robust web applications with modern technologies.
        </p>

        <button
          type="button"
          className="group relative flex h-11 sm:h-12 items-center justify-center gap-3 overflow-hidden rounded-full border border-zinc-200 bg-zinc-950 px-6 sm:px-8 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
        >
          {/* Shine Sweep Effect */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Imagetext