'use client'

import { useReducer, useEffect, useState } from "react"
import Card from "./Card"
import getVenues from "@/libs/getVenues"

type Venue = {
  _id: string
  name: string
  picture: string
}

type Action =
  | { type: "init"; venues: Venue[] }
  | { type: "rate"; venue: string; value: number }
  | { type: "remove"; venue: string }

function reducer(state: Map<string, number>, action: Action) {
  const newMap = new Map(state)

  if (action.type === "init") {
    action.venues.forEach(v => newMap.set(v.name, 0))
  }

  if (action.type === "rate") {
    newMap.set(action.venue, action.value)
  }

  if (action.type === "remove") {
    newMap.delete(action.venue)
  }

  return newMap
}

export default function CardPanel() {

  const [venues, setVenues] = useState<Venue[]>([])
  const [venueRatings, dispatch] = useReducer(reducer, new Map())

  useEffect(() => {
    async function fetchData() {
      const res = await getVenues()
      setVenues(res.data)
      dispatch({ type: "init", venues: res.data })
    }
    fetchData()
  }, [])

  if (venues.length === 0) {
    return <div className="text-white text-center mt-10">Loading...</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <Card
            key={venue._id}
            name={venue.name}
            image={venue.picture}
            id={venue._id}
            rating={venueRatings.get(venue.name) || 0}
            onRatingChange={(name, value) =>
              dispatch({
                type: "rate",
                venue: name,
                value: value ?? 0
              })
            }
          />
        ))}
      </div>

     
      <div className="mt-10 space-y-3">

        <h2 className="text-2xl font-semibold text-white">
          Venue List with Ratings : {venueRatings.size}
        </h2>

        {[...venueRatings.entries()].map(([name, value]) => (
          <div
            key={name}
            className="cursor-pointer bg-white text-black p-3 rounded shadow"
            onClick={() =>
              dispatch({ type: "remove", venue: name })
            }
          >
            {name} : {value}
          </div>
        ))}

      </div>

    </div>
  )
}