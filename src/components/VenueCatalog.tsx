import { VenueJson, VenueItem } from "@/interface";
import Card from "@/components/Card";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson>
}) {
  const venues = await venuesJson

  if (!venues.data || venues.data.length === 0) {
    return <p className="text-center mt-10">ไม่พบข้อมูลสถานที่จัดงาน</p>
  }

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-10">
      {venues.data.slice(0, 3).map((venue: VenueItem) => (
        
        <Card
          key={venue.id}
          id={venue.id}
          name={venue.name}
          image={venue.picture}
        />
      ))}
    </div>
  )
}