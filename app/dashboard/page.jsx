"use client";
import { useEffect, useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import Messages from "../components/Messages";
import Empty from "../components/Empty";
import { userState } from "../state/atoms/userState";
import { useRecoilState } from "recoil";
const Dashboard = () => {
  const [copied, setCopied] = useState(false);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useRecoilState(userState);

  const copy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className=" text-white">
      <h4 className=" mt-8 text-base font-semibold">
        You have {messages.length} message(s)
      </h4>
      <div>
        <span className="mt-4 flex items-center justify-between rounded-md bg-[#666161] p-4 text-base font-semibold text-dark">
          <p>https://any.vercel.app/{user.full_name}</p>
          {!copied ? (
            <FaCopy
              onClick={() => copy(`https://any.vercel.app/${user.full_name}`)}
            />
          ) : (
            <FaCheck />
          )}
        </span>
        <p className=" mt-1 text-xs">Copy and share your anonymous link</p>
      </div>
      <h2 className=" my-7 text-base font-semibold">Your messages</h2>
      {messages.length == 0 ? (
        <Empty />
      ) : (
        messages.map((message) => (
          <Messages messages={message.text} id={message.id} key={message.id} />
        ))
      )}
    </div>
  );
};

export default Dashboard;
