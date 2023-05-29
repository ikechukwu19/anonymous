"use client";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "./lib/supabaseClient";
import { useRouter } from "next/navigation";
import VerifyEmail from "./components/VerifyEmail";
import Loader from "./components/Loader";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });
    if (data) {
      router.push("/verify");
      setLoading(false);
    }
    if (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          // redirectTo: "http://localhost:3000/dashboard",
          redirectTo: "https://anonmsgs.vercel.app/dashboard",
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <main className=" mt-24 px-4">
      <div className="mt-10">
        <h1 className=" text-4xl  font-semibold text-white">
          Create an account
        </h1>
        <p className=" mt-1 text-white">
          Receive anonymous messages from your lovers, haters admirers
        </p>
      </div>
      <form className=" mt-10" onSubmit={submit}>
        <input
          type="text"
          placeholder="Username"
          className="w-full border-b border-solid border-[#FFFEFE] bg-transparent pb-1 text-white outline-none focus:border-white"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className=" mt-5 w-full border-b border-solid border-[#ffffff] bg-transparent pb-1 text-white outline-none focus:border-white"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className=" mt-5 w-full border-b border-solid border-[#FFFEFE] bg-transparent pb-1 text-white outline-none focus:border-white"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className=" mt-12 h-14 w-full rounded-lg bg-[#3A3A3A] text-white">
          Sign up
        </button>
        <br />
        <h2 className="mt-3 text-center text-white">or</h2>
      </form>
      <button
        className="mt-10 flex h-14 w-full items-center justify-center gap-4 rounded-lg border border-solid border-black text-white"
        onClick={signInWithGoogle}
      >
        <FcGoogle className=" text-4xl" />
        Sign up with google
      </button>
      <p className="mt-2 text-white">
        Already have an account ? <Link href="/login">log in</Link>
      </p>
    </main>
  );
}
