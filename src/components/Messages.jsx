import { useContext, useEffect, useRef } from "react";
import propTypes from "prop-types";
import Triangle from "./shared/Triangle";
import { UserContext } from "../context";

const Messages = ({ data }) => {
  // console.log(data);
  const { user } = useContext(UserContext);
  const view = useRef(null);
  useEffect(() => {
    view?.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);
  return (
    <div className="container px-8 dark:text-white">
      {data?.map((ele, ind) => (
        <div key={ind} className="flex">
          {/* received messages */}
          {ele.senderId != user.id && (
            <h1 className="relative rounded-lg rounded-tl-none px-3 py-2 pr-10 mr-auto max-w-[75%] bg-white dark:bg-bghero shadow-md w-fit my-2">
              {ele?.message}
              <span className="absolute bottom-0 right-0 m-1 text-xs text-gray-700 ">
                {new Date(ele.createdAt).toLocaleTimeString().substring(0, 5)}
              </span>
            </h1>
          )}
          {/* sent messages */}
          {ele.senderId == user.id && (
            <h1 className="relative rounded-lg rounded-br-none px-3 py-2 pr-10 ml-auto max-w-[75%] bg-green-600 shadow-md w-fit my-2">
              {ele.message}
              <span className="absolute bottom-0 right-0 m-1 text-xs text-gray-800 ">
                {new Date(ele.createdAt).toLocaleTimeString().substring(0, 5)}
              </span>
            </h1>
          )}
        </div>
      ))}
      <div ref={view} />
    </div>
  );
};

export default Messages;

// {!data?.[ind - 1]?.r && ele.r && <Triangle />}
//           {ele.senderId == user.id && (
//             <h1 className="relative rounded-lg rounded-tl-none px-3 py-2 pr-10 mr-auto max-w-[75%] bg-white dark:bg-bghero shadow-md w-fit my-2">
//               {ele?.message}
//               <span className="absolute bottom-0 right-0 m-1 text-xs text-gray-700 ">
//                 {new Date(ele.createdAt).toLocaleTimeString().substring(0,5)}
//               </span>
//             </h1>
//           )}
//           {ele.s && (
//             <h1 className="relative rounded-lg rounded-br-none px-3 py-2 pr-10 ml-auto max-w-[75%] bg-green-600 shadow-md w-fit my-2">
//               {ele?.s}
//               <span className="absolute bottom-0 right-0 m-1 text-xs text-gray-800 ">
//                 {ele.time}
//               </span>
//             </h1>
//           )}
//           {!data?.[ind - 1]?.s && ele.s && (
//             <div className="triangleg mt-auto -translate-y-2 rotate-90 shadow-lg" />
//           )}
