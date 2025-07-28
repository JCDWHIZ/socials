// function MobilePost() {
//   return (
//     <div className="border-t border-b border-gray-200">
//       <div className=" flex gap-3 p-3">
//         <div className="">
//           <div className="h-8 w-8 rounded-full bg-red-500"></div>
//         </div>
//         <div className="text flex flex-col w-full">
//           <h1 className="text-lg">alex_johnsons</h1>
//           <h1 className="text-gray-300 text-sm">2 hours ago</h1>
//         </div>
//         <div className="">
//           <div className="h-4 w-4 rounded-full bg-red-500"></div>
//         </div>
//       </div>
//       <div className="h-[350px] bg-gray-400"></div>
//       <div className="p-3 flex justify-between">
//         <div className="flex gap-1 w-full">
//           <div className="h-4 w-4 rounded-full bg-red-500"></div>
//           <div className="h-4 w-4 rounded-full bg-red-500"></div>
//         </div>
//         <div className="h-4 w-4 rounded-full bg-red-500"></div>
//       </div>
//       <div className="p-3">
//         <div className="">
//           <h1>1,232 likes</h1>
//         </div>
//         <div className="">
//           <h1>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
//             officia?
//           </h1>
//         </div>
//       </div>
//       <div className="p-3">
//         <h1 className="text-gray-300 text-m">View all comments</h1>
//         <div className="flex gap-1 items-center">
//           <div className="flex items-center">
//             <div className="h-7 w-7 rounded-full bg-red-500 mr-1"></div>
//             <h1 className="pr-2">Sarah_m</h1>
//             <h1>what an amazing shot there!</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MobilePost;

// components/MobilePost.tsx
import React from "react";

interface MobilePostProps {
  name: string;
  caption: string;
  images: string[];
  comments: string[];
  timeAgo?: string;
}

const MobilePost: React.FC<MobilePostProps> = ({
  name,
  caption,
  images,
  comments,
  timeAgo = "2 hours ago",
}) => {
  return (
    <div className="border-t border-b border-gray-200">
      {/* Header */}
      <div className="flex gap-3 p-3 items-center">
        <div className="h-8 w-8 rounded-full bg-gray-300"></div>
        <div className="flex flex-col w-full">
          <h1 className="text-sm font-semibold">{name}</h1>
          <h1 className="text-gray-400 text-xs">{timeAgo}</h1>
        </div>
        <div className="h-4 w-4 rounded-full bg-gray-400"></div>
      </div>

      {/* Images */}
      <div className="w-full flex overflow-x-scroll gap-2">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`post-${idx}`}
            className="h-[350px] object-cover min-w-full"
          />
        ))}
      </div>

      {/* Actions */}
      <div className="p-3 flex justify-between">
        <div className="flex gap-3">
          <div className="h-5 w-5 rounded-full bg-gray-400"></div>
          <div className="h-5 w-5 rounded-full bg-gray-400"></div>
        </div>
        <div className="h-5 w-5 rounded-full bg-gray-400"></div>
      </div>

      {/* Caption */}
      <div className="p-3">
        <h1 className="font-semibold">
          {Math.floor(Math.random() * 1000) + 100} likes
        </h1>
        <p className="mt-1 text-sm">
          <span className="font-semibold mr-1">{name}</span>
          {caption}
        </p>
      </div>

      {/* Comments */}
      <div className="p-3">
        <p className="text-gray-400 text-sm mb-1">View all comments</p>
        {comments.slice(0, 1).map((comment, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gray-300"></div>
            <p className="text-sm">
              <span className="font-semibold mr-1">user_{idx + 1}</span>
              {comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobilePost;
