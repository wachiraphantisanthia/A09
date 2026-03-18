import getVenue from "@/libs/getVenue"

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>
}) {
  const { vid } = await params
  
  
  const venueResponse = await getVenue(vid)
  
  
  const venue = venueResponse.data  

  if (!venue) return <div>No data</div>

  
  let imageUrl = venue.picture?.trim() || ''
  
  if (imageUrl.includes('drive.google.com')) {
    const fileId = imageUrl.split('id=')[1]?.split('&')[0]?.trim()
    if (fileId) {
      imageUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
    }
  } else if (!imageUrl.startsWith('http')) {
    imageUrl = `https://a08-venue-explorer-backend-2.vercel.app${venue.picture?.trim() || ''}`
  }

  return (
    <main className="p-5">
      <h1 className="text-2xl font-bold mb-4">{venue.name}</h1>

      <img
        src={imageUrl.trim()}
        alt={venue.name}
        className="w-full max-w-md object-cover rounded-lg"
      />

      <div className="mt-4 space-y-2">
        
        <p><strong>Address:</strong> {venue.address}</p>
        <p><strong>Province:</strong> {venue.province}</p>
        <p><strong>Postal Code:</strong> {venue.postalcode}</p>
        <p><strong>Tel:</strong> {venue.tel}</p>
        <p><strong>Rental Rate:</strong> {venue.dailyrate} Baht/day</p>
      </div>
    </main>
  )
}