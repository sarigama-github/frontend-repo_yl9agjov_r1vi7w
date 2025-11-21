import React from 'react'
import { motion } from 'framer-motion'

const gameList = Array.from({length: 12}).map((_,i)=>({
  id: i+1,
  title: `Neon Arena ${i+1}`,
  genre: i%2===0? 'Shooter':'MOBA'
}))

export default function Games(){
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold">Games</h1>
          <p className="text-white/70 mt-2">Choose from a growing library. Hover to feel the depth.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gameList.map((g,idx)=> (
            <motion.div key={g.id}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:idx*0.03}}
              className="group relative rounded-2xl p-5 bg-white/5 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition"/>
              <div className="h-40 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-inner group-hover:rotate-1 group-hover:scale-[1.02] transition-transform"/>
              <div className="mt-4">
                <div className="font-semibold">{g.title}</div>
                <div className="text-white/60 text-sm">{g.genre} • 4.8★</div>
              </div>
              <div className="mt-4 flex gap-3">
                <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-500 to-blue-500 text-sm font-semibold">Play</button>
                <button className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-sm">Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
