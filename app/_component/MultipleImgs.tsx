'use client'

import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface Project {
  image: string
  title: string
  category: string
  github: string
  live: string
}

interface MultipleImgsProps {
  projects: Project[]
}

const MultipleImgs = ({ projects }: MultipleImgsProps) => {
  if (!projects?.length) return null

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <article className="group h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] sm:text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                    {project.title}
                  </h3>

                  {/* Links */}
                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-800 transition hover:bg-zinc-900 hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-zinc-950 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-zinc-800"
                    >
                      <ExternalLink className="h-4 w-4 text-[#86efac]" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  )
}

export default MultipleImgs

