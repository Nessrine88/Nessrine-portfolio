import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-zinc-950 text-white py-12 px-6 sm:px-10 lg:px-16 border-t border-zinc-800'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left'>
        
        {/* Contact Info */}
        <div className='space-y-4 flex flex-col items-center md:items-start'>
          <h2 className='text-lg font-semibold tracking-wide text-zinc-100'>Contact Us</h2>
          <div className='flex flex-col gap-3'>
            <a 
              href="mailto:infofigue@gmail.com" 
              className='text-zinc-400 hover:text-[#86efac] transition-colors flex items-center gap-3 text-sm sm:text-base'
            >
              <Mail className='w-4 h-4 text-[#86efac]' /> 
              infofigue@gmail.com
            </a>
            <a 
              href="tel:+1234567890" 
              className='text-zinc-400 hover:text-[#86efac] transition-colors flex items-center gap-3 text-sm sm:text-base'
            >
              <Phone className='w-4 h-4 text-[#86efac]' /> 
              +1 (234) 567-890
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className='space-y-4 flex flex-col items-center md:items-start'>
          <h2 className='text-lg font-semibold tracking-wide text-zinc-100'>Social Media</h2>
          <div className='flex items-center gap-4'>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              className='w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-950 hover:bg-[#86efac] hover:border-[#86efac] flex items-center justify-center transition-all duration-300 active:scale-95'
            >
              <Facebook className='w-5 h-5' />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className='w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-950 hover:bg-[#86efac] hover:border-[#86efac] flex items-center justify-center transition-all duration-300 active:scale-95'
            >
              <Instagram className='w-5 h-5' />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              className='w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-950 hover:bg-[#86efac] hover:border-[#86efac] flex items-center justify-center transition-all duration-300 active:scale-95'
            >
              <Twitter className='w-5 h-5' />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className='mt-12 pt-6 border-t border-zinc-800/80 text-center text-xs sm:text-sm text-zinc-500'>
        <p>&copy; {new Date().getFullYear()} Nessrine Macherki. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer