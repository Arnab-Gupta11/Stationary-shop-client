/* eslint-disable @typescript-eslint/no-explicit-any */
const AboutImage = ({ img }: { img: any }) => {
  return (
    <img
      src={img}
      alt="about us picture"
      className="w-full h-auto rounded-md group-hover:scale-105 duration-700 brightness-75 group-hover:brightness-95"
    />
  );
};

export default AboutImage;
