import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("");
  const [visibilityB, setVB] = useState("visible");
  const [visibilityR, setVR] = useState("visible");
  const [visibilityG, setVG] = useState("visible");
  const [visibilityBl, setVBl] = useState("hidden");

  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
      <p>Өнгө солих</p>
      <button 
        className={`border bg-red-800 py-4 px-4 visibility: ${visibilityR}`}
        onClick={() => {
          setColor("red");
        }}
      >
        Улаан
      </button>
      <button 
        className={`border bg-blue-800 py-4 px-4 visibility: ${visibilityB}`}
        onClick={() => {
          setColor("blue");
        }}
      >
        Цэнхэр
      </button>
      <button 
        className={`border bg-green-800 py-4 px-4 visibility: ${visibilityG}`}
        onClick={() => {
          setColor("green");
        }}
      >
        Ногоон
      </button>
      <button 
        className={`border bg-black-800 py-4 px-4 visibility: ${visibilityBl}`}
        onClick={() => {
          setColor("");
        }}
      >
        Back
      </button>

        {color != "" ? setVBl("visible") : "000"}


    </div>
  );
};








