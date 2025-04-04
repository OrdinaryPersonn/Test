import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [click, setClick] = useState("");
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border rounded-lg p-5 m-4">
        <div className="flex justify-center gap-2 mb-3">
          <button 
            className="border p-2 bg-yellow-600 text-white rounded"
            onClick={() => setClick("Quasa 🥐")}
          >
            Click
          </button>
          <button 
            className="border p-2 bg-gray-600 text-white rounded"
            onClick={() => setClick("")}
          >
            Clear
          </button>
        </div>
        
        <p className="font-semibold text-center mb-3">Name: {click}</p>
        
        <button
        onClick={() => router.back()}
        className="fixed bottom-4 left-4 bg-green-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-green-600 transition duration-300"
      >
        Back
      </button>
      </div>
    </div>
  );
}