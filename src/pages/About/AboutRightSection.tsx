import "./about.css";
const AboutRightSection = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="company-overview mb-8 w-full bs:w-4/5 ml-auto">
      <h2 className="text-lg xsm:text-xl sm:text-2xl font-bold mb-4 inline-block relative underline-small-right dark:text-dark-primary-txt text-light-primary-text font-Aclonica">
        {title}
      </h2>
      <p className="text-xs xsm:text-sm sm:text-base text-light-secondary-text dark:text-dark-secondary-txt font-medium text-justify">
        {description}
      </p>
    </div>
  );
};

export default AboutRightSection;
