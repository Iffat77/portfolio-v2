import React from "react";

// const ObjectVisualization = ({ data }) => {
//   return (
//     <div className="bg-gray-900 p-4 rounded-lg">
//       <pre className="text-green-400">
//         <code>{JSON.stringify(data, null, 2)}</code>
//       </pre>
//     </div>
//   );
// };

// export default ObjectVisualization;

const ObjectVisualization = ({ data }) => {
  return (
    <div className="bg-gray-900 p-4 md:w-1/2 rounded-lg">
      <details className="text-green-400">
        <summary className="cursor-pointer ">quickInfo</summary>
        <pre className="collapse">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </details>
    </div>
  );
};
export default ObjectVisualization;