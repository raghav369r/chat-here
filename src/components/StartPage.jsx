import { AiFillMessage } from "react-icons/ai";
import { IoIosLock } from "react-icons/io";

const StartPage = () => {
  return (
    <div className="text-center flex flex-col h-[100vh] w-screen justify-center font-local items-center gap-3 bg-neutral-200">
      <AiFillMessage color="gray" className="size-16 mb-8" />
      <hr className="max-w-[400px] border-2 border-green-600 rounded-full w-5/6 px-7" />
      <h1 className="text-gray-700">Chat Here</h1>
      <div className="flex gap-1">
        <IoIosLock color="gray" />
        <p className="text-gray-500 text-sm">End-to-End Encrypted</p>
      </div>
    </div>
  );
};

export default StartPage;
