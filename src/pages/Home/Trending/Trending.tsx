import Section from "@/components/shared/Section";
import BestSellings from "./BestSellings";
import TopRated from "./TopRated";
import SectionHeader from "../SectionHeader/SectionHeader";

const Trending = () => {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeader heading="Trending" subheading="Products" />
        <div className="flex flex-col sm:flex-row gap-5 ">
          <BestSellings />
          <TopRated />
        </div>
      </Section>
    </div>
  );
};

export default Trending;
