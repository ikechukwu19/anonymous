"use client";
import DashboardNav from "../components/DashboardNav";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { userState } from "../state/atoms/userState";
import { useRecoilState } from "recoil";
import { supabase } from "../lib/supabaseClient";
import Loader from "../components/Loader";

const Dashboardlayout = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setLoading(false);
        if (!user) {
          router.push("/login");
          return;
        }
        setUser(user.user_metadata);
      } catch (error) {
        console.log(error);
      }
      // if (!user) {
      //   router.push("/login");
      // } else {
      //   setUser(user.user_metadata);
      //   console.log(user.user_metadata);
      // }
    };
    getUser();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="px-4 font-grotesk">
      <DashboardNav />
      {children}
    </div>
  );
};

export default Dashboardlayout;
