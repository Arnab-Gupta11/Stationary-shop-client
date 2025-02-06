import "./about.css";
const AboutRightSection = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="company-overview mb-8 w-full bs:w-4/5 ml-auto">
      <h2 className="text-lg xsm:text-xl sm:text-2xl font-bold mb-4 inline-block relative underline-small-right text-slate-900">{title}</h2>
      <p className="text-xs xsm:text-sm sm:text-base text-slate-700 font-medium text-justify">{description}</p>
    </div>
  );
};

export default AboutRightSection;
