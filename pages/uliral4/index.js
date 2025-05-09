import { useState } from "react";
import { useRouter } from "next/router";
export default function Lab1() {
    const router = useRouter();
    const [search, setSearch] = useState("");

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

            <div className="w-[80%] h-[95vh] bg-white rounded-xl overflow-auto p-4 text-black"></div>
            </div>)}