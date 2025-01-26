import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[90%] mx-auto ">{children}</div>;
};

export default Section;
