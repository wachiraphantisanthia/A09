import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import BookingForm from "./BookingForm";

export default async function BookingPage() {
  const session = await getServerSession(authOptions);

  let profile = null;
  if (session?.user?.token) {
    const data = await getUserProfile(session.user.token);
    if (data?.success) {
      profile = data.data;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4">
      <div className="max-w-3xl mx-auto">

        {/* USER PROFILE */}
        {profile && (
          <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-8 mb-8 text-white space-y-2">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <p><span className="text-gray-400">Name:</span> {profile.name}</p>
            <p><span className="text-gray-400">Email:</span> {profile.email}</p>
            <p><span className="text-gray-400">Tel.:</span> {profile.tel}</p>
            <p><span className="text-gray-400">Member Since:</span> {new Date(profile.createdAt).toLocaleDateString()}</p>
          </div>
        )}

        {/* BOOKING FORM */}
        <BookingForm />

      </div>
    </div>
  );
}