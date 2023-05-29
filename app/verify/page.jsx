import Image from "next/image";

const VerifyEmail = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center px-4">
      <Image
        src="./verify.svg"
        height={200}
        width={200}
        style={{ objectFit: "cover" }}
        alt="verify email"
        className=" drop-shadow-2xl"
      />
      <h6 className=" mt-2 text-center text-xl text-white">
        We've sent an email to you, Please verify your email to login
      </h6>
    </div>
  );
};

export default VerifyEmail;
