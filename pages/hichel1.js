import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [click, setClick] = useState("");
  const router = useRouter();

  return (
    <div className="m-5">
      <button className="border p-1 mb-2 bg-yellow-700" onClick={() => setClick("Quasa 🥐")}>
        Click
      </button>
      <button className="border p-1 mb-2 ml-5 bg-gray-700" onClick={() => setClick("")}>
        Click
      </button>
      <p className="font-semibold">Name: {click} </p>
      <button
          onClick={() => router.back()}
          className="fixed bottom-4 left-4 bg-green-400 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-300"
        >
          Back
        </button>
    </div>
  );
}

// week1 aaa