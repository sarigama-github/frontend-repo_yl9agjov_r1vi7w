import React from 'react'
import { DiscordLogoIcon } from '@radix-ui/react-icons'

export default function Footer(){
  return (
    <footer className="mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="text-2xl font-extrabold tracking-wider">ArenaX</div>
            <p className="text-white/60 mt-2">Futuristic e-sports experiences for the next generation of gamers.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <a className="text-white/80 hover:text-white" href="#">Privacy</a>
            <a className="text-white/80 hover:text-white" href="#">Terms</a>
            <a className="text-white/80 hover:text-white" href="#">Careers</a>
            <a className="text-white/80 hover:text-white" href="#">Support</a>
          </div>
          <div className="flex md:justify-end">
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600/30 transition shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              <DiscordLogoIcon className="w-5 h-5"/>
              Join our Discord
            </a>
          </div>
        </div>
        <div className="mt-10 text-white/50 text-sm">© {new Date().getFullYear()} ArenaX. All rights reserved.</div>
      </div>
    </footer>
  )
}
