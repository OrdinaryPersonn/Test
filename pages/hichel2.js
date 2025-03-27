import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [color, setColor] = useState("");
  const router = useRouter();

  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800 `}>
      <button
          onClick={() => router.back()}
          className="fixed bottom-4 left-4 bg-green-400 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-300"
        >
          Back
        </button>
      <p>Өнгө солих</p>
      <button 
        className={`border bg-red-800 py-4 px-4 `}
        onClick={() => {
          setColor("red");
        }}
      >
        Улаан
      </button>
      <button 
        className={`border bg-blue-800 py-4 px-4`}
        onClick={() => {
          setColor("blue");
        }}
      >
        Цэнхэр
      </button>
      <button 
        className={`border bg-green-800 py-4 px-4 `}
        onClick={() => {
          setColor("green");
        }}
      >
        Ногоон
      </button>
      <button 
        className={`border bg-black-800 py-4 px-4 `}
        onClick={() => {
          setColor("");
        }}
      >
        Back
      </button>

    </div>
  );
};








//week2 aaa