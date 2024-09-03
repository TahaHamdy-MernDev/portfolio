import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { Globe } from "./GridGlobe";
import dynamic from "next/dynamic";
const CopyButton = dynamic(() => import("./CopyButton"), {
  ssr: false,
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  description,
  className,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Next.js", "Node.js"];
  const rightLists = ["Express.js", "MongoDB", "TypeScript"];

  return (
    <div
      className={cn(
        "row-span-1 overflow-hidden relative rounded-lg  group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={` ${id === 6 ? "flex justify-center" : ""} h-full`}>
        <div className="w-full h-full absolute top-0 left-0">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center rounded-lg"
              )}
            />
          )}
        </div>
        <div
          className={` absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            ` group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-2 lg:p-5" `
          )}
        >
          <div className=" font-sans font-extralight text-[#c1c2d3]     text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg md:text-xl lg:text-2xl max-w-96 z-50">
            {title}
          </div>
          {id === 2 && <Globe />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* Tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {renderPlaceholders(2)}
                {leftLists.map((item, i) => (
                  <TechStackItem key={i + 1} item={item} />
                ))}
                {renderPlaceholders(2)}
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                {renderPlaceholders(3)}
                {rightLists.map((item, i) => (
                  <TechStackItem key={i + 1} item={item} />
                ))}
                {renderPlaceholders(2)}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <CopyButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface ITechStackItemProps {
  item: string;
}
const TechStackItem: React.FC<ITechStackItemProps> = ({ item }) => (
  <span
    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-70
    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
  >
    {item}
  </span>
);

const renderPlaceholders = (count: number) =>
  Array.from({ length: count }).map((_, i) => (
    <span
      key={i + 1}
      className="lg:py-4 lg:px-3 py-3 px-2 rounded-lg text-center bg-[#10132E]"
    />
  ));
