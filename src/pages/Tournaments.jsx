import React from 'react'
import { motion } from 'framer-motion'

export default function Tournaments(){
  const items = Array.from({length:6}).map((_,i)=>({
    id:i+1, name:`Arena Championship ${i+1}`, date:`2025-12-${10+i}`,
    teams: 64, prize: `$${(i+1)*10000}`
  }))

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold">Tournaments</h1>
          <p className="text-white/70 mt-2">Compete in high-stakes events and climb the global leaderboard.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {items.map((t,idx)=> (
              <motion.div key={t.id} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.05}}
                className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <div className="text-sm text-white/70">{t.date}</div>
                <div className="mt-1 text-xl font-bold">{t.name}</div>
                <div className="text-white/60">Teams: {t.teams} • Prize: {t.prize}</div>
                <button className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 font-semibold">Register</button>
              </motion.div>
            ))}
          </div>

          <div>
            <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <div className="text-xl font-bold mb-4">Leaderboard</div>
              <div className="grid gap-3">
                {Array.from({length:8}).map((_,i)=> (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500 text-xs grid place-items-center">#{i+1}</div>
                      <div className="font-medium">Team {String.fromCharCode(65+i)}</div>
                    </div>
                    <div className="text-white/60">{(8000 - i*123)} pts</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
