import { SingleVenueJson } from "@/interface"; 

export default async function getVenue(vid: string): Promise<SingleVenueJson> {
  const backends = [
    "https://a08-venue-explorer-backend.vercel.app",
    "https://a08-venue-explorer-backend-2.vercel.app",
    "https://a08-venue-explorer-backend-3.vercel.app"
  ];
  
  let lastError;
  
  for (const baseUrl of backends) {
    try {
      const res = await fetch(`${baseUrl}/api/v1/venues/${vid}`, { cache: "no-store" });
      if (res.ok) {
        return await res.json();  
      }
    } catch (error) {
      lastError = error;
      continue;
    }
  }
  
  throw lastError || new Error("Failed to fetch venue");
}