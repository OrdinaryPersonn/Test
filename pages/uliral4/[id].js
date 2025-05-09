import { useRouter } from "next/router";

export default function Lab3() {
    const router = useRouter();
    return(
        <div>
            <button onClick={() => router.back()}
            className="fixed bottom-4 left-4 bg-green-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-green-600 transition duration-300">
            Back
        </button>
        </div>
    );
}