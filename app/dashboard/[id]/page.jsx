"use client";
import Loader from "@/app/components/Loader";
import { supabase } from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdDownload, MdShare } from "react-icons/md";

const Preview = ({ params }) => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMsg = async () => {
      const {
        data: {
          user: { id },
        },
      } = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from("Messages")
        .select("message")
        .eq("owner", id)
        .eq("id", params.id);
      setLoading(false);
      setMsg(data[0].message);
    };
    getMsg();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className=" text-white">
      <div className="mt-12 h-fit w-full rounded-xl bg-gradient ">
        <h2 className=" p-4 text-center text-3xl font-bold">{msg}</h2>
        <div className=" flex  w-full gap-2 border-t border-white p-4 text-xl">
          <MdDownload />
          <MdShare />
        </div>
      </div>
    </div>
  );
};

export default Preview;
