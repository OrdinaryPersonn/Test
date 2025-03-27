import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div className="flex w-full h-8 m-5">
      <button
          onClick={() => router.back()}
          className="fixed bottom-4 left-4 bg-green-400 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-300"
        >
          Back
        </button>
      <p className="mr-5 ml-5">Нэр:</p>
      <input class="placeholder-shown:border-gray-500 p-2 text-gray-500" placeholder="Нэрээ бичнэ үү." type="text"  onchange="myFunction()"onChange={(e) => setName(e.target.value)}></input>
      <p className="ml-5">Hi 11В, {name != "" ? name : "сурагч"}!</p>
    </div>
  );
};




// onChange={(e) => setName(e.target.value)}
// setName(e.target.value)


// week3 aaa

