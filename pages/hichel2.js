import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [color, setColor] = useState("");
  const router = useRouter();

  return (
    <div className={`flex flex-col items-center justify-center w-full h-screen bg-${color}-800 space-y-4 p-4`}>
      {/* Back button (kept in same position) */}
      <button
        onClick={() => router.back()}
        className="fixed bottom-4 left-4 bg-green-400 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-300"
      >
        Back
      </button>

      {/* Title */}
      <p className="text-white text-xl font-medium">Өнгө солих</p>

      {/* Button container */}
      <div className="flex flex-wrap justify-center gap-4">
        <button 
          className="border border-white bg-red-800 text-white py-4 px-6 rounded-md hover:bg-red-700 transition duration-300"
          onClick={() => setColor("red")}
        >
          Улаан
        </button>
        <button 
          className="border border-white bg-blue-800 text-white py-4 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          onClick={() => setColor("blue")}
        >
          Цэнхэр
        </button>
        <button 
          className="border border-white bg-green-800 text-white py-4 px-6 rounded-md hover:bg-green-700 transition duration-300"
          onClick={() => setColor("green")}
        >
          Ногоон
        </button>
        <button 
          className="border border-white bg-gray-800 text-white py-4 px-6 rounded-md hover:bg-gray-700 transition duration-300"
          onClick={() => setColor("")}
        >
          Reset
        </button>
      </div>
    </div>
  );
}