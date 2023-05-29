"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../state/atoms/userState";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";

const DashboardNav = () => {
  const router = useRouter();
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.push("/login");
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_OUT") router.push("/login");
    });
  };
  const [user, setUser] = useRecoilState(userState);
  return (
    <div className=" mt-7 flex items-center justify-between gap-2 text-white">
      <h2 className=" text-lg font-bold">
        {new Date().getHours() > 12 && new Date().getHours() < 17
          ? "Good afternoon"
          : new Date().getHours() > 18
          ? "Good evening"
          : "Good morning"}
        , {user.full_name}
      </h2>
      <BiLogOut className=" text-2xl" onClick={signOut} />
    </div>
  );
};

export default DashboardNav;
