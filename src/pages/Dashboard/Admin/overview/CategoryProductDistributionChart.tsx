import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useTheme } from "@/Provider/ThemeProvider";
import { TGetProductDistributionByParentCategory } from "@/types/metadata.types";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const CategoryProductDistributionChart = ({ data }: { data: TGetProductDistributionByParentCategory[] }) => {
  console.log(data);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const chartData = [...data];

  const chartConfig = {
    count: {
      label: "Listings",
      color: "rgb(250,65,75)",
    },
  } satisfies ChartConfig;
  return (
    <div className="p-4 bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-light-border dark:border-dark-border rounded-3xl shadow-dashboard-page-shadow-light dark:shadow-dashboard-page-shadow-dark">
      <div className="font-semibold text-light-primary-text dark:text-dark-primary-txt leading-relaxed">Category-wise Products Distribution</div>
      {data && (
        <div>
          <ChartContainer config={chartConfig} className="max-h-[300px] mt-5 mx-auto">
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
              }}
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray="5 5"
                stroke="currentColor"
                className="text-gray-300 dark:text-[#284450]"
                strokeOpacity={0.5}
              />
              <XAxis
                dataKey="name"
                tickLine={true}
                tickMargin={10}
                tick={{ fill: isDarkMode ? "#ffffff" : "#333333", fontSize: 12, fontWeight: "medium" }}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 7)}
                className="fill-dark-primary-txt text-dark-primary-txt"
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent className="bg-light-primary-bg dark:bg-dark-primary-bg text-light-primary-txt dark:text-dark-primary-txt shadow-md border-2 border-[#e9ebec] dark:border-[#142e3a]" />
                }
              />
              <Bar dataKey="productCount" fill="var(--color-count)" radius={8}>
                <LabelList position="top" offset={10} className="fill-light-secondary-txt dark:fill-light-secondary-txt font-medium" fontSize={12} />
              </Bar>
            </BarChart>
          </ChartContainer>
          <div className="leading-relaxed text-light-secondary-text dark:text-dark-secondary-txt text-center my-5 text-xs sm:text-sm font-medium">
            Displays the number of products in each category.
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryProductDistributionChart;
