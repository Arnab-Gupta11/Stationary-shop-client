import { IconType } from "react-icons/lib";

type TOverviewStateCardProps = {
  label: string;
  state: number;
  Icon: IconType;
};
const OverviewStateCard: React.FC<TOverviewStateCardProps> = ({ label, state, Icon }) => {
  return (
    <div className="flex items-center gap-4 bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-light-border dark:border-dark-border rounded-3xl shadow-dashboard-page-shadow-light dark:shadow-dashboard-page-shadow-dark p-4">
      <div className="w-12 h-12 bg-light-muted-bg dark:bg-dark-muted-bg flex items-center justify-center text-4xl rounded-2xl text-primary">
        <Icon />
      </div>
      <div>
        <h1 className="text-light-secondary-text dark:text-dark-secondary-txt font-semibold text-lg">{label}</h1>
        <h5 className="text-light-primary-text dark:text-dark-primary-txt font-bold text-2xl mt-1 font-Aclonica">{state}</h5>
      </div>
    </div>
  );
};

export default OverviewStateCard;
