import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  const team = Array.from({length:6}).map((_,i)=>({id:i+1,name:`Player ${i+1}`,role:i%2? 'Designer':'Caster'}))
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(236,72,153,0.12),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold">About ArenaX</h1>
          <p className="text-white/70 mt-2 max-w-3xl">Born from the spirit of competition, we craft immersive experiences that bring gamers together. Our mission is to elevate e-sports with premium production, fair play, and a community-first mindset.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <div className="text-xl font-semibold">Our Story</div>
            <p className="text-white/70 mt-2">From garage LAN parties to global arenas, ArenaX has evolved into a hub for elite players and fans. We blend neon futurism, precision engineering, and the hype of live competition.</p>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <div className="text-xl font-semibold">Mission & Values</div>
            <ul className="mt-2 text-white/70 list-disc list-inside">
              <li>Competitive integrity</li>
              <li>Player empowerment</li>
              <li>Community-driven innovation</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <div className="text-2xl font-bold mb-4">Meet the Team</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m,idx)=> (
              <motion.div key={m.id} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:idx*0.05}}
                className="group rounded-2xl p-6 bg-white/5 border border-white/10">
                <div className="h-40 rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-sky-500/20"/>
                <div className="mt-4 font-semibold">{m.name}</div>
                <div className="text-white/60 text-sm">{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
