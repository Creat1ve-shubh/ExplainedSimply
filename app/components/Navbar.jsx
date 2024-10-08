import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    
    <div className="bg-slate-800 mx-[60vh] my-[3vh] px-[20vh] py-70px flex gap-8 text-white text-2xl rounded-lg">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Try it</Link>
      <Link href="/dashboard">More Coming</Link>
      <Link href="/dashboard">About Us</Link>
 
    </div>
  )
}

export default Navbar
