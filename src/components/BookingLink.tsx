'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function BookingLink() {
  return (
    <Link 
      href="/booking" 
      className="text-white hover:text-gray-300 flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.2)'
      }}
    >
      Booking
      <Image 
        src="/logo.png" 
        alt="Logo" 
        width={32} 
        height={32}
        className="rounded"
        style={{
          boxShadow: '0 2px 8px rgba(255, 255, 255, 0.3)'
        }}
      />
    </Link>
  )
}