import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Imagetext from './_component/Imagetext'
import MultipleImgs from './_component/MultipleImgs'
import Footer from './_component/Footer'
import AnimatedText from './_component/AnimatedText'
import Header from './_component/Header'

export default function Home() {
  const showcaseImages = [
    "/project-1.png",
    "/ecommerce.png",
    "/project-2.png",
    "/project-3.png",
    "/project-4.png",
    "/project-5.png",
  ]

  return (
    <div className='relative bg-[#f8fafc] text-zinc-900 selection:bg-[#86efac] selection:text-zinc-950 min-h-screen overflow-x-hidden'>
      {/* HEADER NAVIGATION */}
      <Header />

      {/* 1. HERO SECTION (ISOMETRIC / SLANTED SHOWCASE) */}
      <section className='relative w-full flex items-center overflow-hidden pt-24 sm:pt-32 pb-16 px-4 sm:px-8 md:px-16'>
        {/* Subtle Ambient Glow */}
        <div className='absolute -top-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-[#86efac]/20 rounded-full blur-3xl pointer-events-none' />

        <div className='max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center'>
          
          {/* Left Hero Content */}
          <div className='lg:col-span-6 z-10 space-y-4 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start'>
            {/* Mint Green Pill Badge */}
            <div className='inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#86efac] text-zinc-950 text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-sm'>
              Software Developer
            </div>

            {/* Title Block */}
            <div className='space-y-1 sm:space-y-2'>
              <h1 className='text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-zinc-950 leading-[0.95]'>
                <AnimatedText text="HELLO, I'M NESSRINE" />
              </h1>
              <p className='text-xl sm:text-3xl md:text-5xl font-light text-zinc-500 tracking-tight'>
                Photography & Code
              </p>
            </div>

            <p className='text-sm sm:text-base md:text-lg text-zinc-600 max-w-lg font-normal leading-relaxed'>
              Curated visual storytelling and full-stack digital craftsmanship by <span className='font-semibold text-zinc-900'>Nessrine Macherki</span>.
            </p>

            {/* CTA Group */}
            <div className='pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto'>
              <a
                href='#work'
                className='w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-zinc-950 text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition active:scale-95 shadow-sm'
              >
                Explore Work
                <ArrowUpRight className='w-4 h-4 text-[#86efac]' />
              </a>
              <a
                href='#contact'
                className='w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-zinc-900 text-xs sm:text-sm font-semibold border border-zinc-200 hover:bg-zinc-50 transition active:scale-95 shadow-sm'
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Hero: Slanted / 3D Isometric Cards Showcase */}
          <div className='lg:col-span-6 relative w-full h-[360px] sm:h-[480px] md:h-[560px] lg:h-[640px] flex items-center justify-center [perspective:1000px] sm:[perspective:1400px] overflow-hidden sm:overflow-visible'>
            <div className='relative w-full h-full flex items-center justify-center [transform:rotateX(18deg)_rotateY(-14deg)_rotateZ(8deg)] sm:[transform:rotateX(22deg)_rotateY(-18deg)_rotateZ(12deg)] scale-75 xs:scale-85 sm:scale-95 lg:scale-100 transition-transform duration-700 ease-out hover:scale-105'>
              <div className='grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-[110%] sm:w-[120%]'>
                {showcaseImages.map((src, i) => (
                  <div
                    key={i}
                    className={` relative overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-200 border-2 sm:border-4 border-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:shadow-[0_20px_50px_rgba(0,0,0,0.12)] aspect-[4/5] ${
                      i % 2 === 1 ? '-translate-y-4 sm:-translate-y-8' : 'translate-y-2 sm:translate-y-4'
                    } ${i >= 4 ? 'hidden sm:block' : ''}`}
                  >
                    <Image
                      src={src}
                      alt={`Showcase ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 35vw, 25vw"
                      className='object-bottom-left hover:scale-105 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80' />
                    <div className='absolute bottom-2.5 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4 text-white text-[10px] sm:text-xs font-medium truncate'>
                      Project {i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ABOUT / PHILOSOPHY */}
      <section id='about' className='relative z-20 py-16 sm:py-24 px-4 sm:px-8 md:px-16 bg-white border-t border-zinc-200/60'>
        <div className='max-w-6xl mx-auto'>
          <Imagetext url="/company.png" />
        </div>
      </section>

      {/* 3. SERVICES */}
      <section id='services' className='relative z-20 py-16 sm:py-24 px-4 sm:px-8 md:px-16 bg-zinc-50 border-t border-zinc-200/60'>
        <div className='max-w-6xl mx-auto space-y-8 sm:space-y-12'>
          <div className='text-center space-y-2 sm:space-y-3 px-2'>
            <span className='inline-block px-3.5 py-1 rounded-full bg-[#86efac]/30 text-emerald-800 text-[11px] sm:text-xs font-bold tracking-wider uppercase'>
              Services & Expertise
            </span>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight'>
              Tailored Digital Solutions
            </h2>
          </div>
          <Imagetext url="/services.png" />
        </div>
      </section>

      {/* 4. FEATURED WORK / PROJECTS */}
      <section id='work' className='relative z-20 py-16 sm:py-24 px-4 sm:px-8 md:px-16 bg-white border-t border-zinc-200/60'>
        <div className='max-w-6xl mx-auto space-y-8 sm:space-y-12'>
          <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4'>
            <div>
              <span className='inline-block px-3.5 py-1 rounded-full bg-[#86efac]/30 text-emerald-800 text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-2'>
                Selected Work
              </span>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight'>
                Featured Projects
              </h2>
            </div>
            {/* Filter pills with horizontal swipe on mobile */}
            <div className='flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none'>
              {['All', 'Web Apps', 'UI/UX'].map((cat, idx) => (
                <button
                  key={cat}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${
                    idx === 0
                      ? 'bg-zinc-900 text-white'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <MultipleImgs imgUrls={showcaseImages.slice(0, 3)} />
        </div>
      </section>

      {/* 5. FOOTER & INQUIRY */}
      <footer id='contact' className='relative z-20 bg-zinc-950 text-white border-t border-zinc-800'>
        <Footer />
      </footer>
    </div>
  )
}