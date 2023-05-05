import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [input, setInput] = useState({ email: "", password: "" });

  const subscribe = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      if (res.status === 201) {
        alert("You are subscribed!");
      } else {
        // @ts-ignore
        alert(res?.message);
      }
    } catch (err: unknown) {
      alert((err as Error).message);
    }
  };

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
            onChange={(e) =>
              setInput((st) => ({ ...st, email: e.target.value }))
            }
            aria-label="email address"
            placeholder="Enter your email address"
          />
          <input
            className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
            id="email"
            type="password"
            onChange={(e) =>
              setInput((st) => ({ ...st, password: e.target.value }))
            }
            aria-label="password"
            placeholder="password"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
            type="submit"
            onClick={subscribe}
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}
