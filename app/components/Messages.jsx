"use client";
import Link from "next/link";
import { IoIosOpen } from "react-icons/io";

const Messages = ({ messages, id }) => {
  return (
    <Link href={`/dashboard/${id}`}>
      <div className=" mb-4 flex h-16 w-full items-center justify-between rounded-xl border border-solid border-[#cacaca] px-3">
        <p className=" basis-[90%] overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {messages}
        </p>
        <IoIosOpen className="text-2xl" />
      </div>
    </Link>
  );
};

export default Messages;
