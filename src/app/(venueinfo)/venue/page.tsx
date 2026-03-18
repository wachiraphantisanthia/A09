import getVenues from "@/libs/getVenues"
import VenueCatalog from "@/components/VenueCatalog"

export default async function VenuePage() {
  const venuesData = await getVenues()
  
  return (
    <main className="min-h-screen bg-black-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Venue List
      </h1>

      <VenueCatalog venuesJson={Promise.resolve(venuesData)} />
    </main>
  )
}