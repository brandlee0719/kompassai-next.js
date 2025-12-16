import Highcharts from "highcharts";
import React, { useEffect } from "react";

const gradientColors = {
  linearGradient: [0, 0, 0, 300],
  stops: [
    [0, "#E7436A"],
    [1, "rgba(231, 67, 106, 0)"],
  ],
};

export default function ContactCreatedComponent(props) {
  useEffect(() => {
    const chartOptions = {
      chart: {
        type: "area",
      },
      title: {
        text: "",
      },
      plotOptions: {
        area: {
          fillColor: gradientColors,
          marker: {
            enabled: true,
          },
        },
      },
      xAxis: {
        categories: [
          "Aug 28",
          "Aug 31",
          "Sep 3",
          "Sep 6",
          "Sep 9",
          "Sep 12",
          "Sep 15",
          "Sep 18",
        ],
      },
      yAxis: {
        title: {
          text: "",
        },
      },
      series: [
        {
          name: "",
          data: [1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3],
        },
      ],
    };

    const chart = Highcharts.chart("contactCreatedChart", chartOptions);

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="w-full p-6 bg-white rounded-2xl border flex-col justify-start items-center gap-4 flex">
      <div className="w-full shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 text-black text-xl font-normal font-Outfit leading-relaxed">
            Contacts Created
          </div>
        </div>
        <div className="text-neutral-400 text-sm font-normal font-Outfit leading-tight">
          Total contacts created over time.
        </div>
        <div id="contactCreatedChart" className="w-full "></div>
      </div>
    </div>
  );
}
