"use client";
import { MdDownload, MdShare } from "react-icons/md";

const Preview = ({ params: { id } }) => {
  return (
    <div className=" text-white">
      <div className="mt-12 h-fit w-full rounded-xl bg-gradient ">
        <h2 className=" p-4 text-center text-3xl font-bold">
          You are the light of my world without you i wonder what my life would
          look like, i just want to say thank you for everything
        </h2>
        <div className=" flex  w-full gap-2 border-t border-white p-4 text-xl">
          <MdDownload />
          <MdShare />
        </div>
      </div>
    </div>
  );
};

export default Preview;
