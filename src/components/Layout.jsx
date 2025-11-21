import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="bg-[#0a0b10] text-white min-h-screen selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main className="pt-20">{/* offset for sticky navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
