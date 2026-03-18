'use client'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {
  const covers = ["/cover.jpg","/cover2.jpg","/cover3.jpg","/cover4.jpg"];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div
      className="relative w-full h-[700px] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_50px_120px_rgba(255,255,255,0.7)]"
      onClick={() => setIndex((prev) => prev + 1)}
    >
      <Image
        src={covers[index % covers.length]}
        alt="covers"
        fill
        className="object-cover"
        priority
        unoptimized
      />

      
      {session && (
        <div className="absolute top-4 right-6 z-10 text-white text-2xl font-bold drop-shadow-lg">
          Welcome {session.user?.name}
        </div>
      )}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-8xl font-bold drop-shadow-xl whitespace-nowrap">
          where every event finds its venue
        </h1>

        <p className="mt-6 text-3xl drop-shadow-md whitespace-nowrap">
          Finding the perfect venue has never been easier. Whether it's a wedding,
          corporate event, or private party, we connecting people to the perfect place.
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          router.push("/venue");
        }}
        className="absolute bottom-6 right-6 bg-white text-black px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
      >
        Select Venue
      </button>

    </div>
  );
}