import Highcharts from "highcharts";
import React, { useEffect } from "react";
import { ReactComponent as DownSVGIcon } from "@/assets/image/icons/down.svg";

const gradientColors = {
  linearGradient: [0, 0, 0, 300],
  stops: [
    [0, "rgba(59, 130, 246, 1)"],
    [1, "rgba(59, 130, 246, 0)"],
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
          color: 'rgb(59, 130, 246)',
          marker: {
            enabled: true,
            fillColor: 'rgb(59, 130, 246)',
            lineWidth: 2,
            lineColor: 'rgba(59, 130, 246, 0.5)'
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
        labels: {
            style: {
              color: '#929292',
              fontSize: '0.775rem',
              fontFamily: 'Outfit'
            },
        },
        lineColor:'#E8E7E7',
      },
      yAxis: {
        title: {
          text: "",
        },
        gridLineColor: '#E8E7E7',
        tickColor: '#E8E7E7',
        labels: {
            style: {
              color: '#929292',
              fontSize: '0.775rem',
              fontFamily: 'Outfit'
            },
        },
      },
      legend:{ enabled:false },
      credits: {
        enabled: false
      },
      series: [
        {
          name: "",
          data: [1, 1, 2, 3, 3, 4, 4, 5],
        },
      ],
    };

    const chart = Highcharts.chart("contactCreatedChart", chartOptions);

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="w-full p-6 bg-white rounded-xl border border-stone-250 flex-col justify-start items-center gap-4 flex">
      <div className="w-full shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 text-black text-lg font-normal font-Outfit leading-relaxed">
            Contacts Created
          </div>
          <div className="justify-start items-center gap-4 flex">
            <button className="justify-start items-center gap-2 flex">
              <div className="text-black text-base font-normal font-Outfit leading-tight">
                This month
              </div>
              <DownSVGIcon className="w-4 h-4 relative" />
            </button>
            <button className="text-blue-500 text-base font-normal font-Outfit leading-tight">
              View more
            </button>
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
