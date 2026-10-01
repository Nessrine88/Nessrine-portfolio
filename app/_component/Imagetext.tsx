import Link from 'next/link'

interface ImagetextProps {
  url: string
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

const Imagetext = ({
  url,
  title,
  description = 'I design and develop modern digital experiences that are responsive, accessible, and built with clean, maintainable code.',
  buttonText = 'Learn More',
  buttonHref = '#contact',
}: ImagetextProps) => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-20 w-full max-w-6xl mx-auto py-12 sm:py-16 lg:py-24 px-4 sm:px-6'>

      {/* Image */}
      <div className='w-full lg:w-1/2 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/80 shadow-md bg-zinc-100'>
        <img
          src={url}
          alt={title || 'Portfolio showcase'}
          className='object-cover w-full h-full transition-transform duration-700 hover:scale-105'
        />
      </div>

      {/* Content */}
      <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6'>

        {title && (
          <h3 className='text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950'>
            {title}
          </h3>
        )}

        <p className='text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl'>
          {description}
        </p>

        <Link
          href={buttonHref}
          className='group relative flex h-11 sm:h-12 items-center justify-center gap-3 overflow-hidden rounded-full border border-zinc-200 bg-zinc-950 px-6 sm:px-8 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-800 active:scale-95 shadow-sm'
        >
          {/* Shine Effect */}
          <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full' />

          <span className='relative z-10'>
            {buttonText}
          </span>
        </Link>

      </div>
    </div>
  )
}

export default Imagetext

