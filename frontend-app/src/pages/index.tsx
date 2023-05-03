import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="p-8 justify-center items-center flex">
        <form className="flex flex-col gap-y-2">
          <input
            className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
            id="email"
            type="email"
            aria-label="email address"
            placeholder="Enter your email address"
          />
          <input
            className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
            id="email"
            type="password"
            aria-label="password"
            placeholder="password"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}
