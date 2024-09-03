import React from "react";
interface IHeadingProps {
  normal: string;
  purble: string;
}
const Heading: React.FC<IHeadingProps> = ({ normal, purble }) => {
  return (
    <h1 className="font-bold text-4xl md:text-5xl text-center">
      {normal} <span className=" text-purple"> {purble} </span>
    </h1>
  );
};

export default Heading;
