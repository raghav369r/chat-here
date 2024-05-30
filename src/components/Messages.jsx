import { useEffect, useRef } from "react";
import propTypes from "prop-types";
import Triangle from "./shared/Triangle";

const Messages = ({ data }) => {
  const view = useRef(null);
  useEffect(() => {
    view?.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);
  return (
    <div className="container px-8 dark:text-white">
      {data?.map((ele, ind) => (
        <div key={ind} className="flex">
          {!(data?.[ind-1]?.r) && ele.r && <Triangle />}
          {ele.r && (
            <h1 className="relative rounded-lg rounded-tl-none px-3 py-2 pr-10 mr-auto max-w-[75%] bg-white dark:bg-bghero shadow-md w-fit my-2">
              {ele?.r}
              <span className="absolute bottom-0 right-0 m-1 text-xs text-gray-700 ">
                {ele.time}
              </span>
            </h1>
          )}
          {ele.s && (
            <h1 className="relative rounded-lg rounded-br-none px-3 py-2 pr-10 ml-auto max-w-[75%] bg-green-600 shadow-md w-fit my-2">
              {ele?.s}
              <span className="absolute bottom-0 right-0 m-1 text-xs text-gray-800 ">
                {ele.time}
              </span>
            </h1>
          )}
          {!(data?.[ind-1]?.s) && ele.s && (
            <div className="triangleg mt-auto -translate-y-2 rotate-90 shadow-lg" />
          )}
        </div>
      ))}
      <div ref={view} />
    </div>
  );
};

Messages.propTypes = {
  data: propTypes.arrayOf(propTypes.string),
};

export default Messages;
