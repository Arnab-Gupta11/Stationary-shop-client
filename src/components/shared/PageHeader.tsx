import { ReactNode } from "react";
import header1Img from "../../assets/images/header/header1.png";
import header2Img from "../../assets/images/header/header2.png";
const PageHeader = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <div className="h-40  bg-secondary-bg-light flex items-center justify-center my-auto relative">
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
        <div className="flex justify-center mt-3">{children}</div>
      </div>
      <img src={header1Img} alt="headerImg" className="h-40 absolute z-0 left-8 bs:left-11 opacity-40 hidden sm:block" />
      <img src={header2Img} alt="headerImg" className="h-40 absolute z-0 right-8 bs:right-11 opacity-40" />
    </div>
  );
};

export default PageHeader;
