import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useTheme } from "@/Provider/ThemeProvider";
import { TUserStatesChart } from "@/types/metadata.types";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const UserStatesChart = ({ data }: { data: TUserStatesChart[] }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const chartData = data.map((item) => ({
    ...item,
    label: item.name,
    percentage: item.value,
    count: item.raw,
  }));

  const chartConfig = {
    count: {
      label: "Count",
      color: "rgb(250,65,75)",
    },
  } satisfies ChartConfig;

  return (
    <div className="p-4 bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer border-2 border-light-border dark:border-dark-border rounded-3xl shadow-dashboard-page-shadow-light dark:shadow-dashboard-page-shadow-dark mt-5">
      <div className="font-semibold text-light-primary-text dark:text-dark-primary-txt leading-relaxed ">User States Overview</div>
      {data && (
        <div>
          <ChartContainer config={chartConfig} className="max-h-[300px] w-full mt-5 mx-auto">
            <BarChart data={chartData} margin={{ top: 20 }}>
              <CartesianGrid
                vertical={false}
                strokeDasharray="5 5"
                stroke="currentColor"
                className="text-gray-300 dark:text-[#284450]"
                strokeOpacity={0.5}
              />
              <XAxis
                dataKey="label"
                tickLine
                tickMargin={10}
                tick={{ fill: isDarkMode ? "#ffffff" : "#333333", fontSize: 12, fontWeight: "medium" }}
                axisLine={false}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent className="bg-light-primary-bg dark:bg-dark-primary-bg text-light-primary-txt dark:text-dark-primary-txt shadow-md border-2 border-[#e9ebec] dark:border-[#142e3a]" />
                }
              />
              <Bar dataKey="count" fill="var(--color-count)" radius={8}>
                <LabelList
                  position="top"
                  dataKey="count"
                  offset={10}
                  className="fill-light-secondary-txt dark:fill-light-secondary-txt font-medium"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
          <div className="leading-relaxed text-light-secondary-text dark:text-dark-secondary-txt text-center my-5 text-xs sm:text-sm font-medium">
            Displays the total values for each user-related metric.
          </div>
        </div>
      )}
    </div>
  );
};

export default UserStatesChart;
