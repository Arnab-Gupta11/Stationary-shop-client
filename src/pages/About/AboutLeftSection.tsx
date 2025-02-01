import "./about.css";
const AboutLeftSection = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="company-overview mb-8 w-full bs:w-4/5">
      <h2 className="text-lg xsm:text-xl sm:text-2xl font-bold mb-4 inline-block relative underline-small font-Cormorant-Garamond text-light-text-100 dark:text-dark-text-100">
        {title}
      </h2>
      <p className="text-xs xsm:text-sm sm:text-base text-light-text-200 dark:text-dark-text-200 font-medium text-justify">{description}</p>
    </div>
  );
};

export default AboutLeftSection;
