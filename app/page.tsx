import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Imagetext from './_component/Imagetext'
import MultipleImgs from './_component/MultipleImgs'
import Footer from './_component/Footer'
import AnimatedText from './_component/AnimatedText'
import Header from './_component/Header'

const projects = [
  {
    image: '/project-1.png',
    title: 'Portfolio Website',
    category: 'Web Apps',
    github: 'https://github.com/Nessrine88/periodic-table',
    live: 'https://periodic-table-theta-cyan.vercel.app/',
  },
  {
    image: '/ecommerce.png',
    title: 'E-Commerce Website',
    category: 'Web Apps',
    github: 'https://github.com/Nessrine88/ecommerce-store',
    live: 'https://ecommerce-store-puce-ten.vercel.app/en',
  },
  {
    image: '/project-2.png',
    title: 'Dashboard',
    category: 'UI/UX',
    github: 'https://github.com/Nessrine88/siFrontend',
    live: 'https://si-frontend-five.vercel.app/communityPage',
  },
  {
    image: '/project-3.png',
    title: 'Project Three',
    category: 'Web Apps',
    github: 'https://github.com/YOUR_USERNAME/project-three',
    live: 'https://map.ca/',
  },
  {
    image: '/project-4.png',
    title: 'Project Four',
    category: 'UI/UX',
    github: 'hhttps://jplatform.sjapathway.com/',
    live: 'https://jplatform.sjapathway.com/',
  },
  {
    image: '/project-5.png',
    title: 'Project Five',
    category: 'Web Apps',
    github: 'https://eplatform.sjapathway.com/',
    live: 'https://eplatform.sjapathway.com/',
  },
    {
    image: '/project-6.png',
    title: 'Project Six',
    category: 'Web Apps',
    github: 'https://services-app-five.vercel.app/',
    live: 'https://services-app-five.vercel.app/',
  },
      {
    image: '/project-7.png',
    title: 'Project Seven',
    category: 'Web Apps',
    github: 'https://portfolio-2-pi-beige.vercel.app/',
    live: 'https://portfolio-2-pi-beige.vercel.app/',
  },
      {
    image: '/project-8.png',
    title: 'Project Eight',
    category: 'Web Apps',
    github: 'https://portfolio-1-rho-ten.vercel.app/',
    live: 'https://portfolio-1-rho-ten.vercel.app/',
  },
]

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-zinc-900 selection:bg-[#86efac] selection:text-zinc-950'>
      {/* HEADER */}
      <Header />

      {/* 1. HERO SECTION */}
      <section className='relative flex w-full overflow-hidden px-4 pt-24 pb-16 sm:px-8 sm:pt-32 md:px-16'>
        {/* Background image */}
        <Image
          src='/profile-bg.svg'
          alt=''
          fill
          priority
          sizes='100vw'
          aria-hidden='true'
          className='pointer-events-none object-cover opacity-40'
        />

        {/* Ambient glow */}
        <div className='pointer-events-none absolute -top-40 h-72 w-72 rounded- sm:h-96 sm:w-96' />

        <div className='relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12'>
          {/* Left hero content */}
          <div className='relative z-10 lg:col-span-6'>
            {/* Soft blurred green glow behind the panel */}
            <div
              aria-hidden='true'
              className='pointer-events-none absolute -inset-4 -z-10 '
            />

            {/* Frosted green panel */}
            <div className='flex flex-col items-center space-y-4 p-6 text-center  sm:space-y-6 sm:p-10 lg:items-start lg:text-left'>
              {/* Badge */}
              <div className='shadow-2xl shadow-blue-950 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#86efac] sm:px-4 sm:text-xs'>
                Software Developer
              </div>

              {/* Title */}
              <div className='space-y-1 sm:space-y-2'>
                <h1 className='text-4xl font-extrabold leading-[0.95] tracking-tight text-zinc-950 sm:text-7xl md:text-8xl'>
                  <AnimatedText text="HI, I'M" />
                  <br />
                  <AnimatedText text='NESSRINE' />
                </h1>

                <p className='text-xl font-normal tracking-tight text-zinc-700 sm:text-3xl md:text-5xl'>
                  Web Developer & Designer
                </p>
              </div>

              {/* Description */}
              <p className='max-w-lg text-sm font-medium leading-relaxed text-zinc-800 sm:text-base md:text-lg'>
                I create modern, responsive and user-friendly websites,
                combining creative design with clean and functional code.{' '}
                <span className='font-bold text-zinc-950'>
                  Nessrine Macherki.
                </span>
              </p>

              {/* CTA */}
              <div className='flex w-full flex-col items-center gap-3 pt-2 sm:w-auto sm:flex-row sm:gap-4'>
                <a
                  href='#work'
                  className='inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-zinc-800 active:scale-95 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm'
                >
                  Explore Work
                  <ArrowUpRight className='h-4 w-4 text-[#86efac]' />
                </a>

                <a
                  href='#contact'
                  className='inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-xs font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 active:scale-95 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm'
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Right hero: profile photo */}
          <div className='relative h-[360px] w-full sm:h-[380px] md:h-[460px] lg:col-span-6 lg:h-[540px]'>
            <Image
              src='/profile.png'
              alt='Profile photo of Nessrine Macherki'
              fill
              priority
              sizes='(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 50vw'
              className='object-contain transition-transform duration-500 hover:scale-105'
            />
          </div>
        </div>
      </section>

      {/* 2. ABOUT */}
      <section
        id='about'
        className='relative z-20 border-t border-zinc-200/60 bg-white px-4 py-16 sm:px-8 sm:py-24 md:px-16'
      >
            <Image
          src='/bubbles-bg.svg'
          alt=''
          fill
          priority
          sizes='100vw'
          aria-hidden='true'
          className='pointer-events-none -z-10 object-cover opacity-50'
        />
        <div className='mx-auto max-w-6xl z-50'>
          <Imagetext
            url='/designer2.jpeg'
            title='Building Digital Experiences With Purpose'
            description="I'm a software developer and web designer focused on creating modern, responsive, and user-friendly digital experiences. I combine thoughtful interface design with clean, scalable code to turn ideas into websites and web applications that feel as good as they work."
            buttonText='More About Me'
            buttonHref='#services'
          />
        </div>
      </section>

      {/* 3. SERVICES */}
      <section
        id='services'
        className='relative z-20 border-t border-zinc-200/60 bg-zinc-50 px-4 py-16 sm:px-8 sm:py-24 md:px-16'
      >
      <Image
        src='/profile-bg.svg'
        alt=''
        fill
        priority
        sizes='100vw'
        aria-hidden='true'
        className='-z-10 pointer-events-none -scale-y-100 object-cover opacity-40'
      />
        <div className='mx-auto max-w-6xl space-y-8 sm:space-y-12'>
          <div className='space-y-2 px-2 text-center sm:space-y-3'>
            <span className='inline-block rounded-full bg-[#86efac]/30 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800 sm:text-xs'>
              Services & Expertise
            </span>

            <h2 className='text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl md:text-4xl'>
              Tailored Digital Solutions
            </h2>
          </div>

          <Imagetext
            url='/designer.jpeg'
            title='From Ideas to Interactive Experiences'
            description='From responsive websites and modern web applications to intuitive UI/UX interfaces, I transform ideas into polished digital products using modern technologies, thoughtful design, and clean development practices.'
            buttonText='Start a Project'
            buttonHref='#contact'
          />
        </div>
      </section>

      {/* 4. FEATURED WORK */}
      <section
        id='work'
        className='relative z-20 border-t border-zinc-200/60 bg-white px-4 py-16 sm:px-8 sm:py-24 md:px-16'
      >
     <Image
        src='/bubbles-wavy-bg.svg'
        alt=''
        fill
        priority
        sizes='100vw'
        aria-hidden='true'
        className='pointer-events-none -z-10 -scale-y-100 object-cover opacity-40'
      />
        <div className='mx-auto max-w-6xl space-y-8 sm:space-y-12'>
          <div>
            <span className='mb-2 inline-block rounded-full bg-[#86efac]/30 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800 sm:text-xs'>
              Selected Work
            </span>

            <h2 className='text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl md:text-4xl'>
              Featured Projects
            </h2>
          </div>

          {/* Filters live inside MultipleImgs (client component) */}
          <MultipleImgs projects={projects} />
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer
        id='contact'
        className='relative z-20 border-t border-zinc-800 bg-zinc-950 text-white'
      >
        <Footer />
      </footer>
    </div>
  )
}