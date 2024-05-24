import { IoIosLock } from "react-icons/io";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center dark:bg-bghero">
      {/* <div className="flex justify-between items-center overflow-hidden w-full h-full">
        <img
          src="/icons/mobile_text.svg"
          alt=""
          color="gray"
          className="h-[50vh] object-contain rotate-[20deg]"
        />
        <img
          src="/icons/mobile_text.svg"
          alt=""
          color="gray"
          className="h-[50vh] object-contain -rotate-[20deg]"
        />
      </div> */}
      <h1 className="text-xl font-semibold text-neutral-600 text-center mb-10 dark:text-white">Chat Here</h1>
      <p className="dark:text-white">Send and receive messages online.</p>
      <div className="absolute bottom-5 flex gap-1 items-center">
        <IoIosLock color="gray" />
        <p className="text-gray-500 text-sm ">
          Your persnal messages are end-to-end encrypted.
        </p>
      </div>
    </div>
  );
};

export default Hero;
