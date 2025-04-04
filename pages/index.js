import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/486281145_1058280036332656_8582639152140190605_n.png?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=nIWWYHUENMoQ7kNvgErU1Bd&_nc_oc=Adnk0YyTEW422tme3sGXQbfx1Z_xjzxOOk51ZKrHcD9wVmBSRdjwsMLVffMQNmdTfew&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&_nc_gid=2rRo81hv_QP9RJ03wWthJg&oh=00_AYEK1TucqpVEOJn2yLoKpyy9fkMQJyR3satFMQHy7u4gZQ&oe=67F3EE62')"
        }}
      ></div>
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 bg-black/30 backdrop-blur-md rounded-lg">
            Гүнсан-Янжин
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
          <button
            onClick={() => router.push("/hichel1")}
            className="bg-blue-800/80 hover:bg-blue-700 text-white p-6 rounded-lg transition-all duration-300 hover:scale-105 flex flex-col items-center backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl font-bold">1</span>
            </div>
            <span className="text-lg font-medium">Hichel 1</span>
          </button>

          <button
            onClick={() => router.push("/hichel2")}
            className="bg-purple-800/80 hover:bg-purple-700 text-white p-6 rounded-lg transition-all duration-300 hover:scale-105 flex flex-col items-center backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl font-bold">2</span>
            </div>
            <span className="text-lg font-medium">Hichel 2</span>
          </button>

          <button
            onClick={() => router.push("/hichel3")}
            className="bg-indigo-800/80 hover:bg-indigo-700 text-white p-6 rounded-lg transition-all duration-300 hover:scale-105 flex flex-col items-center backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl font-bold">3</span>
            </div>
            <span className="text-lg font-medium">Hichel 3</span>
          </button>

          <button
            onClick={() => router.push("/hichel4")}
            className="bg-pink-800/80 hover:bg-pink-700 text-white p-6 rounded-lg transition-all duration-300 hover:scale-105 flex flex-col items-center backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl font-bold">4</span>
            </div>
            <span className="text-lg font-medium">Hichel 4</span>
          </button>
        </div>

      </div>
    </div>
  );
}