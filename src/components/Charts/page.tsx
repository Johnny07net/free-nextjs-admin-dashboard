"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartOne from "@/components/Charts/ChartOne";
import ChartTwo from "@/components/Charts/ChartTwo";
import ChartThree from "@/components/Charts/ChartThree";
import React from "react";

const Chart: React.FC = () => {
  return (
    /**
     * This method is a TSX component that displays a breadcrumb and three charts within a responsive grid.
     *
     * The breadcrumb is displayed at the top and shows the name of the current page as 'Chart'.
     *
     * The grid follows the breadcrumb and it contains three child components: `ChartOne`, `ChartTwo`, and `ChartThree`. Each chart is displayed as a column within the grid. The grid has been designed to be responsive, with different gap sizes defined for different viewport sizes. Specifically, the grid has 12 columns, a gap of 4 units in standard view, a gap of 6 units on medium-sized devices, and a gap of 7.5 units on 2XL and larger devices.
     */
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
