import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState("");

  return (
    <div className="m-5">
      <button className="border p-1 mb-2 bg-yellow-700" onClick={() => setClick("Quasa 🥐")}>
        Click
      </button>
      <button className="border p-1 mb-2 ml-5 bg-gray-700" onClick={() => setClick("")}>
        Click
      </button>
      <p className="font-semibold">Name: {click} </p>
    </div>
  );
}