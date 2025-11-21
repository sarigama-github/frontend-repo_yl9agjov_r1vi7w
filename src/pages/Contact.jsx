import React from 'react'

export default function Contact(){
  return (
    <section className="relative py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold">Contact</h1>
          <p className="text-white/70 mt-2">Reach out for partnerships, support, or media inquiries.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <form className="rounded-2xl p-6 bg-white/5 border border-white/10 grid gap-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input className="mt-1 w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Your name"/>
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" className="mt-1 w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="you@example.com"/>
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea rows="5" className="mt-1 w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Tell us more..."/>
            </div>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 font-semibold">Send</button>
          </form>

          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <div className="text-xl font-semibold">Join the Community</div>
            <p className="text-white/70 mt-2">Connect with fellow players, get updates, and find teammates.</p>
            <div className="mt-4 flex gap-3">
              <a className="px-4 py-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600/30 transition" href="#">Discord</a>
              <a className="px-4 py-2 rounded-xl bg-white/10 border border-white/15" href="#">Twitter/X</a>
              <a className="px-4 py-2 rounded-xl bg-white/10 border border-white/15" href="#">Twitch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
