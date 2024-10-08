import React from "react";
import { CgClose } from "react-icons/cg";

const ShowProfile = ({ profileUrl, name, close }) => {
  if (!profileUrl) return null;
  return (
    <div className="z-[100] w-screen absolute top-0 left-0 bg-black p-4 h-[100dvh] bg-opacity-80 flex flex-col">
      <div className="flex justify-between h-fit">
        <div className="flex gap-4 items-center">
          <img src={profileUrl} className="size-12 object-cover rounded-full" />
          <p className="text-white">{name}</p>
        </div>
        <CgClose
          className="size-8 text-white hover:scale-110 cursor-pointer"
          onClick={close}
        />
      </div>
      <div className="flex justify-center items-center object-cover h-[90%] max-w-full">
        <img src={profileUrl} className="h-3/4 object-contain" alt="image" />
      </div>
    </div>
  );
};

export default ShowProfile;
