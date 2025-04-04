import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [color, setColor] = useState("");
  const router = useRouter();

  return (
    <div className={`flex flex-col items-center justify-center w-full h-screen bg-${color}-800 transition-colors duration-300`}>
      <div className="mb-8">
        <p className="text-xl font-semibold text-white">Өнгө солих</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-md">
        <button 
          className="w-32 h-12 border-2 border-white bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition duration-300"
          onClick={() => setColor("red")}
        >
          Улаан
        </button>
        
        <button 
          className="w-32 h-12 border-2 border-white bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          onClick={() => setColor("blue")}
        >
          Цэнхэр
        </button>
        
        <button 
          className="w-32 h-12 border-2 border-white bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition duration-300"
          onClick={() => setColor("green")}
        >
          Ногоон
        </button>
        
        <button 
          className="w-32 h-12 border-2 border-white bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 transition duration-300"
          onClick={() => setColor("")}
        >
          Reset
        </button>
      </div>

      <button
        onClick={() => router.back()}
        className="fixed bottom-4 left-4 bg-green-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-green-600 transition duration-300"
      >
        Back
      </button>
    </div>
  );
}