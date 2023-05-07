import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [input, setInput] = useState({ email: "", password: "" });

  const subscribe = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/signup", {
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
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              onChange={(e) =>
                setInput((st) => ({ ...st, email: e.target.value }))
              }
              aria-label="email address"
              placeholder="Enter your email address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              onChange={(e) =>
                setInput((st) => ({ ...st, password: e.target.value }))
              }
              aria-label="password"
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="***************"
            />
            {input.password === "" && (
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              onClick={subscribe}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Subscribe
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">&copy;2023 Murali</p>
      </div>
    </main>
  );
}
