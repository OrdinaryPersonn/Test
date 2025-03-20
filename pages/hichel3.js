import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="flex w-full h-8 m-10">
      <p className="mr-5 ml-5">Нэр:</p>
      <input class="placeholder-shown:border-gray-500 p-2 text-gray-500" placeholder="Нэрээ бичнэ үү." type="text"  onchange="myFunction()"onChange={(e) => setName(e.target.value)}></input>
      <p className="ml-5">Hi 11В, {name != "" ? name : "сурагч"}!</p>
    </div>
  );
};




// onChange={(e) => setName(e.target.value)}
// setName(e.target.value)


// week3 aaa

