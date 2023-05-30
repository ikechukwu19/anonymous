"use client";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";
import Loader from "../components/Loader";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (data.session) {
      router.push("/dashboard");
    }
    if (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "https://anonmsgs.vercel.app/dashboard",
        },
      });
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
          Log in to your account
        </h1>
      </div>
      <form className=" mt-10" onSubmit={submit}>
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
          Log in
        </button>
      </form>
      <button
        className="mt-10 flex h-14 w-full items-center justify-center gap-4 rounded-lg border border-solid border-black text-white"
        onClick={signInWithGoogle}
      >
        <FcGoogle className=" text-4xl" />
        Login with google
      </button>
      <p className="mt-2 text-white">
        Don't have an account ? <Link href="/">Sign up</Link>
      </p>
    </main>
  );
}
