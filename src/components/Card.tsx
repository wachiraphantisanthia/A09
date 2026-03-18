'use client'

import InteractiveCard from './InteractiveCard'
import Rating from '@mui/material/Rating'
import Link from 'next/link'

interface CardProps {
  id: string
  name: string
  image: string
  rating?: number
  onRatingChange?: (venueName: string, value: number | null) => void
}

export default function Card({
  id,
  name,
  image,
  rating,
  onRatingChange
}: CardProps) {
 
  let imageUrl = image
  
  if (image?.includes('drive.google.com')) {
    
    const fileId = image.split('id=')[1]?.split('&')[0]
    if (fileId) {
      imageUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
    }
  } else if (!image?.startsWith('http')) {
    imageUrl = `https://a08-venue-explorer-backend.vercel.app${image || ''}`
  }

  return (
    <Link href={`/venue/${id}`}>
      <InteractiveCard className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1 w-[300px]">
        <div className="relative w-full h-56">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-56 object-cover"
          />
        </div>

        <div className="p-4 text-center">
          <p className="text-lg font-semibold text-blue-600 mb-2">
            {name}
          </p>

          {onRatingChange && (
            <Rating
              value={rating || 0}
              onChange={(e, newValue) => {
                e.stopPropagation()
                onRatingChange(name, newValue)
              }}
              onClick={(e) => e.stopPropagation()}
              id={name + " Rating"}
              name={name + " Rating"}
              data-testid={name + " Rating"}
            />
          )}
        </div>
      </InteractiveCard>
    </Link>
  )
}