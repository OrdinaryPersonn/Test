import Image from "next/image";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  return(
    <div className=" h-screen p-10">
      <div className="flex justify-center items-center mt-5 mb-10"><span className="font-bold text-4xl">Гүнсан-Янжин</span></div>
      <div className="bg-black flex justify-center items-center border-solid border-2 rounded-3xl m-5">
      
      <button
                className="h-12 w-36 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-sm m-5"
                onClick={() => router.push("/hichel1")}
              >Hichel 1</button>
      <button
                className="h-12 w-36 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-sm m-5"
                onClick={() => router.push("/hichel2")}
              >Hichel 2</button>
      <button
                className="h-12 w-36 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-sm m-5"
                onClick={() => router.push("/hichel3")}
              >Hichel 3</button>
      <button
                className="h-12 w-36 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-sm m-5"
                onClick={() => router.push("/hichel4")}
              >Hichel 4</button>
      </div>
      
      
    </div>
    
  ); 
}