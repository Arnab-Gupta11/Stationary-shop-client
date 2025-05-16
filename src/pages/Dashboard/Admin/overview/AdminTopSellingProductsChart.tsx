import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TGetTopProducts } from "@/types/metadata.types";
import React from "react";
import { Label, Pie, PieChart } from "recharts";

const AdminTopSellingProductsChart = ({ data }: { data: TGetTopProducts[] }) => {
  const chartData = data.map((item, index) => ({
    name: item.name,
    sales: item.salesCount,
    fill: chartColors[index % chartColors.length], // rotating colors
  }));

  const totalSales = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0);
  }, [chartData]);

  const chartConfig = data.reduce((acc, item, index) => {
    acc[item.name] = {
      label: item.name,
      color: chartColors[index % chartColors.length],
    };
    return acc;
  }, {} as ChartConfig);

  return (
    <div className="p-4 bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-light-border dark:border-dark-border rounded-3xl shadow-dashboard-page-shadow-light dark:shadow-dashboard-page-shadow-dark">
      <div className="font-semibold text-light-primary-text dark:text-dark-primary-txt leading-relaxed">Top Selling Products</div>
      {data && (
        <div>
          <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px] bs:max-h-[200px] xl:max-h-[300px] mt-5">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent className="bg-light-primary-bg dark:bg-dark-primary-bg text-light-primary-txt dark:text-dark-primary-txt shadow-md border-2 border-[#e9ebec] dark:border-[#142e3a]" />
                }
              />
              <Pie data={chartData} dataKey="sales" nameKey="name" innerRadius={70} strokeWidth={20}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                          <tspan x={viewBox.cx} y={viewBox.cy} className="fill-light-primary-txt dark:fill-dark-primary-txt text-3xl font-bold">
                            {totalSales.toLocaleString()}
                          </tspan>
                          <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-light-secondary-text dark:fill-dark-secondary-txt">
                            Sales
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </Pie>
              {/* <ChartLegend
                content={<ChartLegendContent nameKey="name" />}
                className="w-full flex flex-wrap gap-2 justify-center text-light-secondary-text dark:text-dark-secondary-txt font-medium"
              /> */}
            </PieChart>
          </ChartContainer>
          <div className="leading-relaxed text-light-secondary-text dark:text-dark-secondary-txt text-center my-5 text-xs sm:text-sm font-medium">
            Visualization of top products based on sales count.
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTopSellingProductsChart;

// Define some distinct colors for pie chart slices
const chartColors = [
  "rgb(255, 120, 130)", // Light Variant
  "rgb(252,91,111)", // Dark Variant
  "rgb(250,65,75)", // Saturated Variant
  "rgb(253,124,80)", // Muted Variant
  "rgb(250, 90, 60)", // Warm Shifted Variant
];
