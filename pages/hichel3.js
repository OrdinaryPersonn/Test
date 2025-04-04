import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex items-center space-x-4 mb-8">
        <p className="text-lg">Нэр:</p>
        <input 
          className="border p-2 rounded placeholder-gray-500 text-black"
          placeholder="Нэрээ бичнэ үү."
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <p className="text-lg">
          Hi 11В, {name ? name : "сурагч"}!
        </p>
      </div>

      <button
        onClick={() => router.back()}
        className="fixed bottom-4 left-4 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
      >
        Back
      </button>
    </div>
  );
}