import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Gamepad2, Trophy, PlayCircle, Info, Phone } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = React.useState(false)

  const linkBase = 'px-4 py-2 text-sm md:text-base font-medium tracking-wide transition-colors'

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 via-fuchsia-500 to-emerald-400 animate-pulse shadow-[0_0_25px_rgba(99,102,241,0.6)]" />
              <span className="text-xl font-extrabold tracking-wider">ArenaX</span>
            </Link>

            <nav className="hidden md:flex items-center gap-2">
              <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive? 'text-fuchsia-400':'text-white/80 hover:text-white'}`}>Home</NavLink>
              <NavLink to="/games" className={({isActive}) => `${linkBase} ${isActive? 'text-fuchsia-400':'text-white/80 hover:text-white'}`}><Gamepad2 className="w-4 h-4 inline mr-1"/>Games</NavLink>
              <NavLink to="/tournaments" className={({isActive}) => `${linkBase} ${isActive? 'text-fuchsia-400':'text-white/80 hover:text-white'}`}><Trophy className="w-4 h-4 inline mr-1"/>Tournaments</NavLink>
              <NavLink to="/about" className={({isActive}) => `${linkBase} ${isActive? 'text-fuchsia-400':'text-white/80 hover:text-white'}`}><Info className="w-4 h-4 inline mr-1"/>About</NavLink>
              <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive? 'text-fuchsia-400':'text-white/80 hover:text-white'}`}><Phone className="w-4 h-4 inline mr-1"/>Contact</NavLink>
            </nav>

            <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10">
              <Menu className="w-6 h-6"/>
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 grid gap-2">
              <NavLink onClick={()=>setOpen(false)} to="/" end className={({isActive}) => `${linkBase} ${isActive? 'text-fuchsia-400':'text-white/80 hover:text-white'}`}>Home</NavLink>
              <NavLink onClick={()=>setOpen(false)} to="/games" className={({isActive}) => `${linkBase} ${isActive? 'text-fuchsia-400':'text-white/80 hover:text-white'}`}>Games</NavLink>
              <NavLink onClick={()=>setOpen(false)} to="/tournaments" className={({isActive}) => `${linkBase} ${isActive? 'text-fuchsia-400':'text-white/80 hover:text-white'}`}>Tournaments</NavLink>
              <NavLink onClick={()=>setOpen(false)} to="/about" className={({isActive}) => `${linkBase} ${isActive? 'text-fuchsia-400':'text-white/80 hover:text-white'}`}>About</NavLink>
              <NavLink onClick={()=>setOpen(false)} to="/contact" className={({isActive}) => `${linkBase} ${isActive? 'text-fuchsia-400':'text-white/80 hover:text-white'}`}>Contact</NavLink>
              <Link to="/tournaments" onClick={()=>setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 text-white font-semibold shadow-[0_0_25px_rgba(217,70,239,0.5)]">
                <PlayCircle className="w-5 h-5"/> Join Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
