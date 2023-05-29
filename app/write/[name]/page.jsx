"use client";
import Loader from "@/app/components/Loader";
import { supabase } from "@/app/lib/supabaseClient";
import { useState, useEffect } from "react";

const Write = ({ params: { name } }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select()
        .eq("full_name", name);

      setUser(data[0]);
    };
    getUser();
  }, []);
  const sendMessage = async () => {
    setLoading(true);
    const { error } = await supabase
      .from("Messages")
      .insert({ owner: user.id, message, id: crypto.randomUUID() });
    setLoading(false);
    setMsgSent(true);
  };

  if (loading) {
    return <Loader />;
  }

  if (msgSent) {
    return (
      <div>
        <p className=" text-white">Message has been sent to {name}</p>
      </div>
    );
  }

  return (
    <div className=" mt-8 flex flex-col items-center px-4 text-white">
      <p>Write a secret message for {name}</p>
      <textarea
        cols="30"
        rows="10"
        placeholder="write your message.."
        className=" mt-9 rounded-3xl border border-solid border-white bg-transparent p-4 focus:outline-none"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        className=" mt-12 h-14 w-full rounded-lg bg-[#3A3A3A] text-white"
        onClick={sendMessage}
      >
        Send message
      </button>
    </div>
  );
};

export default Write;
