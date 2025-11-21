import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Play, Radio, Trophy, Gamepad2, Sparkles, TrendingUp } from 'lucide-react'

const Stat = ({value, label}) => (
  <div className="text-center">
    <motion.div
      initial={{opacity:0, y:10}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-purple-300 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(217,70,239,0.4)]"
    >{value}</motion.div>
    <div className="text-white/70 mt-1 text-sm md:text-base">{label}</div>
  </div>
)

export default function Home(){
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black pointer-events-none" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}}
              className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-4">
                <Sparkles className="w-4 h-4 text-fuchsia-300"/> <span className="text-white/80 text-sm">Welcome to the Arena</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Enter the ArenaX. Compete. Stream. Dominate.
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">A neon-fueled e-sports hub with tournaments, live streams, and pro-level competition. Built for gamers who want the edge.</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#tournaments" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 font-semibold shadow-[0_0_35px_rgba(217,70,239,0.5)]">
                  <Trophy className="w-5 h-5"/> Join Tournaments
                </a>
                <a href="#streams" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition">
                  <Radio className="w-5 h-5"/> Watch Live
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-6">
                <Stat value="250+" label="Pro Teams"/>
                <Stat value="1.2M" label="Matches Played"/>
                <Stat value="$500k" label="Prize Pools"/>
                <Stat value="24/7" label="Live Streams"/>
                <Stat value="120+" label="Supported Games"/>
                <Stat value="99.9%" label="Uptime"/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.12),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Featured Games</h2>
            <a href="/games" className="text-fuchsia-300 hover:text-fuchsia-200">See all</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1,2,3,4].map(i => (
              <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition"/>
                <div className="h-40 bg-gradient-to-br from-slate-900 to-slate-800"/>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Neon Rush {i}</div>
                      <div className="text-white/60 text-sm">Arcade • PvP</div>
                    </div>
                    <button className="px-3 py-1 rounded-lg bg-fuchsia-600/20 border border-fuchsia-500/30 text-fuchsia-200 text-sm">Play</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section id="tournaments" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Upcoming Tournaments</h2>
            <a href="/tournaments" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600/30 transition"><Trophy className="w-4 h-4"/> View all</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <div className="text-sm text-white/70">Dec {10+i}, 2025</div>
                <div className="mt-2 text-xl font-bold">Arena Cup {i}</div>
                <div className="text-white/60">Teams: 64 • Prize: $10,000</div>
                <button className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 font-semibold">Register</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streams */}
      <section id="streams" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Live Streams</h2>
            <a href="#" className="text-fuchsia-300 hover:text-fuchsia-200">Browse channels</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <div className="aspect-video bg-black/60 flex items-center justify-center">
                  <Play className="w-10 h-10 text-white/40"/>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">ProStream_{i}</div>
                    <div className="text-white/60 text-sm">Ranked Grind • 12.4k watching</div>
                  </div>
                  <div className="inline-flex items-center gap-1 text-emerald-300 text-sm"><TrendingUp className="w-4 h-4"/> Live</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trailer */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-video">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="ArenaX Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
