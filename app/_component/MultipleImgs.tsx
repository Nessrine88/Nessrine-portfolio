import React from 'react'

interface MultipleImgsProps {
  imgUrls: string[]
}

const MultipleImgs = ({ imgUrls }: MultipleImgsProps) => {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 py-8'>
      {/* Responsive Grid instead of rigid flex/w-1/3/h-1/4 */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
        {imgUrls?.map((url: string, index: number) => (
          <div
            key={index}
            className='relative aspect-4/3 overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/80 bg-zinc-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1'
          >
            <img
              src={url}
              alt={`Project showcase ${index + 1}`}
              className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MultipleImgs