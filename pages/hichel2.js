import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("");
  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
      <p>Өнгө солих</p>
      <button 
        className="border bg-red-800 py-4 px-4"
        onClick={() => {
          setColor("red");
        }}
      >
        Улаан
      </button>
      <button 
        className="border bg-blue-800 py-4 px-4"
        onClick={() => {
          setColor("blue");
        }}
      >
        Цэнхэр
      </button>
      <button 
        className="border bg-green-800 py-4 px-4"
        onClick={() => {
          setColor("green");
        }}
      >
        Ногоон
      </button>
      <button 
        className="border bg-black py-4 px-4"
        onClick={() => {
          setColor("");
        }}
      >
        Back
      </button>

        {color == "red" ? "123" : color == "blue" ? "456" : color == "green" ? "789" : "000"}

    </div>
  );
};








