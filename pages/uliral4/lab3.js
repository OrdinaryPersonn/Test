import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Lab3() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const responseClothes = await fetch("https://mongol-api-rest.vercel.app/clothes");
                const responseInstruments = await fetch("https://mongol-api-rest.vercel.app/instruments");
                const responseTools = await fetch("https://mongol-api-rest.vercel.app/historicaltools");
                const responseGroups = await fetch("https://mongol-api-rest.vercel.app/ethnicgroups");
                const responseProvinces = await fetch("https://mongol-api-rest.vercel.app/provinces");
                const responseFigures = await fetch("https://mongol-api-rest.vercel.app/historicalfigures");
                const responseTourist = await fetch("https://mongol-api-rest.vercel.app/touristattractions");

                const result1 = await responseClothes.json();
                const result2 = await responseInstruments.json();
                const result3 = await responseTools.json();
                const result4 = await responseGroups.json();
                const result5 = await responseProvinces.json();
                const result6 = await responseFigures.json();
                const result7 = await responseTourist.json();

                console.log(result1, result2, result3, result4, result5, result6, result7);
                
                setData([...result1.clothes, ...result2.instruments, ...result3.historicalTools, ...result4.ethnicGroups, ...result5.provinces, ...result6.historicalFigures, ...result7.touristAttractions]);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );
    
    

    return (
        <div className="flex gap-x-6 p-4 bg-gray-300">
            <div className="w-[20%] h-[95vh] bg-white rounded-xl pt-6">
                <div className="flex justify-center">
                    <img src="https://nhs.edu.mn/favicon.ico" alt="Logo" className="w-20 h-20" />
                </div>
                <h1 className="flex justify-center pt-5 text-black pb-5">Гүнсан-Янжин</h1>
                    <div className="flex justify-center p-2">
                        <button onClick={() => router.push("/")} className="bg-indigo-800/80 hover:bg-indigo-700 text-white p-3  rounded-lg transition-all duration-300 hover:scale-105 flex flex-col items-center backdrop-blur-sm">Toki</button></div>
                    <div className="flex justify-center p-2">
                        <button onClick={() => router.push("/uliral4/lab1")} className="bg-indigo-800/80 hover:bg-indigo-700 text-white p-3  rounded-lg transition-all duration-300 hover:scale-105 flex flex-col items-center backdrop-blur-sm">Lab1</button></div>
                    <div className="flex justify-center p-2">
                        <button onClick={() => router.push("/uliral4/lab2")} className="bg-indigo-800/80 hover:bg-indigo-700 text-white p-3  rounded-lg transition-all duration-300 hover:scale-105 flex flex-col items-center backdrop-blur-sm">Lab2</button></div>
                        <div className="flex justify-center p-2">
                        <button onClick={() => router.push("/uliral4/lab3")} className="bg-indigo-800/80 hover:bg-indigo-700 text-white p-3  rounded-lg transition-all duration-300 hover:scale-105 flex flex-col items-center backdrop-blur-sm">Lab3</button></div>
            </div>

            <div className="w-[80%] h-[95vh] bg-white rounded-xl overflow-auto p-4 text-black">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by name.."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>

                {loading ? (
                    <p className="text-center text-gray-600 text-lg py-10">Loading, please wait...</p>
                    ) : (
                    <div className="overflow-x-auto bg-white rounded-lg p-6">
                        <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-7xl mx-auto">
                        {filteredData.map((item) => (
                            <div onClick={() => router.push(`/uliral4/lab3/${item.id}`)}
                            key={`${item.id}-${item.name}`}
                            className="bg-blue-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col items-center text-center">
                            <img
                                src={
                                    item.images || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
                                }
                                alt={item.name || "No image"}
                                className="rounded-md object-cover w-36 h-36 mb-4"/>


                            <h3 className="text-lg font-semibold text-blue-900">{item.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            <p className="text-sm text-gray-700 mt-2">
                                <strong>Time Period:</strong> {item.timePeriod}
                            </p>
                            <div className="mt-3 text-left w-full">
                                <p className="font-medium text-gray-800">Materials:</p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                                {item?.materials?.map((mat, i) => (
                                    <li key={i}>{mat}</li>
                                ))}
                                </ul>
                            </div>
                            </div>
                        ))}
                        {filteredData.length === 0 && (
                            <div>
                                <p className="text-center p-4 text-gray-500">No items found</p>
                            </div>
                        )}
                        </div>
                    </div>
                    )}

            </div>
        </div>
    );
}
