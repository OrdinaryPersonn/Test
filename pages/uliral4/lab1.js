const Data = [
    {
        id: 1,
        name: "Iphone 12 tuntuntuntuntuntuntuntuntuntuntuntuntuntuntuntuntuntuntuntun",
        color: "red",
        price: "1,500,000 tuntuntuntuntuntuntuntuntuntuntuntuntuntuntuntuntuntuntuntun",
        image: "https://www.red.org/wp-content/uploads/2020/10/iPhone4-3-1.png",
        item: [
            { id: 1, name: "case", price: "50,000 tuntuntuntuntuntuntuntuntuntuntuntuntuntun" },
            { id: 2, name: "adapter", price: "100,000" }
        ] 
    },
    {
        id: 2,
        name: "Mac",
        color: "silver",
        price: "3,500,000",
        image: "https://forums.appleinsider.com/uploads/editor/nk/91jv8ojs03u4.jpg",
        item: [
            { id: 1, name: "case", price: "150,000" },
            { id: 2, name: "adapter", price: "150,000" }
        ]
    },
    {
        id: 3,
        name: "Backpack",
        color: "blue",
        price: "1,500,000",
        image: "https://fjallraven.com.au/cdn/shop/files/Kanken_No2_23565-042_A_MAIN_FJR_1100x.png?v=1722316612",
        item: [
            { id: 1, name: "panda", price: "50,000" },
            { id: 2, name: "panda2", price: "100,000" }
        ]
    },
    {
        id: 4,
        name: "Hedgehog",
        color: "brown",
        price: "500,000",
        image: "https://th-thumbnailer.cdn-si-edu.com/NOKvdu7i9aU4dyDwoiuMiWOGSmQ=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ef/ff/efff9ae5-1832-489f-bb1f-f1a00944a8aa/hedgehog.jpg",
        item: [
            { id: 1, name: "food", price: "50,000" },
            { id: 2, name: "snack", price: "100,000" }
        ]
    },
    {
        id: 5,
        name: "Airpod",
        color: "white",
        price: "500,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScufh2nkb3ZMjhgbGu9jsFt0H2SqLsZ_zsdRs1jszLM2_yiTP7tBFCJbUVSI_FFkoLCwc&usqp=CAU",
        item: [
            { id: 1, name: "case", price: "50,000" },
            { id: 2, name: "charger", price: "50,000" }
        ]
    },
];

import { useState } from "react";
import { useRouter } from "next/router";
export default function Lab1() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const filteredData = Data.filter((item) =>
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
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>

                <table className="w-full text-left text-black">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2">Name</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Items</th>
                            <th className="p-2">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((data) => (
                            <tr key={data.id} className="hover:bg-gray-50">
                                <td className="p-2 font-bold max-w-[150px] truncate">{data.name}</td>
                                <td className="p-2 max-w-[70px] truncate">{data.price}</td>
                                <td className="p-2 max-w-[80px] truncate">
                                    <ul className="list-disc pl-5">
                                        {data.item.map((item) => (
                                            <li key={item.id}>{item.name} — {item.price}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <img src={data.image} alt={data.name} width="150" className="pr-2" />
                                </td>
                            </tr>
                        ))}
                        {filteredData.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center p-4 text-gray-500">No items found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
