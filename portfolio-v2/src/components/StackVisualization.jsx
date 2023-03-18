import React, { useState } from "react";
import classNames from "classnames";

const StackVisualization = () => {
  const [stack, setStack] = useState([]);

  const handlePush = () => {
    setStack([...stack, "mongo","express","react","node"]);
  };

  const handlePop = () => {
    if (stack.length > 0) {
      setStack(stack.slice(0, stack.length - 1));
    }
  };

  return (
    <div className="h-full">
      <div className="bg-gray-900 w-full md:w-1/2 dark:bg:black shadow-md rounded-md p-4">
        <div className="flex justify-around items-center mb-4">
          <div className="text-green-400 font-medium">My Stack</div>
          <div className="flex items-center space-x-2">
            <button
              className={classNames(
                "bg-blue-500 hover:bg-blue-600 text-white rounded-md px-2 py-1",
                {
                  "opacity-50 cursor-default": stack.length >= 5,
                }
              )}
              onClick={handlePush}
              disabled={stack.length >= 4}
            >
              Push
            </button>
            <button
              className={classNames(
                "bg-red-500 hover:bg-red-600 text-white rounded-md px-2 py-1",
                {
                  "cursor-default": stack.length === 0,
                }
              )}
              onClick={handlePop}
              disabled={stack.length === 0}
            >
              Pop
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center h-16">
          {stack.map((item, index) => (
            <div
              key={index}
              className="bg-violet-500 text-white rounded-md px-4 py-2 mx-2"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackVisualization;
