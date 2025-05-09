import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Lab2() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
                const result = await response.json();
                console.log(result);
                setData(result.clothes);
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
                            <div
                            key={item.id}
                            className="bg-blue-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col items-center text-center"
                            >
                            <img
                                src={item.images}
                                alt={item.name}
                                className="rounded-md object-cover w-36 h-36 mb-4"
                            />
                            <h3 className="text-lg font-semibold text-blue-900">{item.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            <p className="text-sm text-gray-700 mt-2">
                                <strong>Time Period:</strong> {item.timePeriod}
                            </p>
                            <div className="mt-3 text-left w-full">
                                <p className="font-medium text-gray-800">Materials:</p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                                {item.materials.map((mat, i) => (
                                    <li key={i}>{mat}</li>
                                ))}
                                </ul>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    )}

            </div>
        </div>
    );
}
