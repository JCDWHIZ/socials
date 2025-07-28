// src/components/story.tsx
import React from "react";
import { FaPlus } from "react-icons/fa";

interface StoryProps {
  name: string;
  image?: string;
  isOwn?: boolean;
}

function Story({ name, image, isOwn }: StoryProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[70px] h-[70px] rounded-full relative overflow-hidden border-2 border-red-500">
        {isOwn ? (
          <div className="flex items-center justify-center w-full h-full border-dashed border-2 border-gray-400">
            <FaPlus className="text-gray-400 text-xl" />
          </div>
        ) : (
          <img src={image} alt={name} className="object-cover w-full h-full" />
        )}
      </div>
      <p className="text-sm mt-1 text-center truncate w-[70px]">{name}</p>
    </div>
  );
}

export default Story;
