import { FC } from "react";
import Image from "../assets/images/vfsoyf9t1js91 1.png";

export const NewOffreCard: FC<{
  size?: "small" | "default";
  youWillGet?: boolean;
  showButton?: boolean;
}> = ({
  size = "default",
  youWillGet = true,
  showButton = true,
}): JSX.Element => {
  const isSmall = size === "small";

  return (
    <div
      className={`
        bg-white dark:bg-[#212121] 
        flex 
        ${isSmall ? "flex-col sm:flex-row" : "flex-col lg:flex-row"} 
        rounded-lg 
        shadow-lg 
        overflow-hidden 
        border-r border-t border-b border-gray-300 dark:border-gray-600
        ${isSmall ? "w-full" : ""}
      `}
    >
      <div
        className={`
          w-full 
          ${
            isSmall ? "sm:w-[300px] sm:h-[300px]" : "lg:w-[696px] lg:h-[595px]"
          } 
          z-20 
          relative
        `}
      >
        <img
          src={Image}
          alt="Archviz & Interior Design"
          className={`
            w-full 
            ${isSmall ? "sm:w-full sm:h-full" : "lg:w-[696px] lg:h-[595px]"} 
            object-cover
          `}
        />
      </div>

      <div
        className={`
          w-full 
          ${isSmall ? "sm:w-1/2" : "lg:w-1/2"} 
          p-4 
          flex 
          flex-col 
          space-y-4 
          justify-center 
          z-20 
          relative
        `}
      >
        <h3
          className={`
            text-black dark:text-white 
            ${isSmall ? "text-xl sm:text-2xl" : "text-3xl lg:text-6xl"} 
            font-bold 
            mb-2 
            text-center 
            ${isSmall ? "sm:text-left" : "lg:text-left"}
          `}
        >
          Archviz & Interior Design
        </h3>
        <p
          className={`
            text-gray-700 dark:text-gray-400 
            ${isSmall ? "text-sm" : "text-lg"} 
            mb-4 
            text-center 
            ${isSmall ? "sm:text-left" : "lg:text-left"}
          `}
        >
          Transform your ideas into 3D Architectural Visualization experiences.
        </p>
        {youWillGet && (
          <p
            className={`
              text-white dark:text-white 
              text-center 
              ${isSmall ? "sm:text-left" : "lg:text-left"}
            `}
          >
            You'll get
          </p>
        )}
        <div
          className={`
            text-black dark:text-white 
            list-disc 
            flex flex-wrap
            gap-1
            text-xs
            font-medium
            ${isSmall ? "text-sm" : ""}
          `}
        >
          <div className="p-2 border rounded-xl border-gray-300 dark:border-gray-600">
            Photorealistic 3D Renderings
          </div>

          <div className="p-2 border rounded-xl border-gray-300 dark:border-gray-600">
            3D Virtual Tours
          </div>

          <div className="p-2 border rounded-xl border-gray-300 dark:border-gray-600">
            Material & Furniture Boards
          </div>
          <div className="p-2 border rounded-xl border-gray-300 dark:border-gray-600">
            Interior & Exterior visuals
          </div>
          <div className="p-2 border rounded-xl border-gray-300 dark:border-gray-600">
            Accurate drawing
          </div>
        </div>
        {showButton && (
          <div
            className={`
              flex 
              ${
                isSmall
                  ? "justify-center sm:justify-start"
                  : "justify-center lg:justify-start"
              }
            `}
          >
            <button
              className={`
                px-4 
                py-2 
                ${isSmall ? "text-sm" : "px-6 py-3"} 
                bg-red-500 
                text-white 
                font-bold 
                rounded-md 
                hover:bg-red-600 
                transition
                dark:bg-red-600 dark:hover:bg-red-700
              `}
            >
              Learn More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
