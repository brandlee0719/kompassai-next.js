import Highcharts from "highcharts";
import React, { useEffect } from "react";
import { ReactComponent as MailSVGIcon } from "@/assets/image/icons/icon-mail.svg";
import { ReactComponent as CallSVGIcon } from "@/assets/image/icons/icon-call.svg";

const gradientColors = {
  linearGradient: [0, 0, 0, 300],
  stops: [
    [0, "rgba(59, 130, 246, 1)"],
    [1, "rgba(59, 130, 246, 0)"],
  ],
};

export default function DataRevealedComponent(props) {
  const dataRevealedChartOptions = {
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
          data: [1, 2, 3, 3, 2, 2, 1, 3],
        },
      ],
    };

  const contactRevealedChartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: "",
      align: "center",
      verticalAlign: "middle",
      x: 50,
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        startAngle: 90,
        endAngle: 450,
        colors: ["#090C05", "#929292"],
      },
    },
    credits: {
        enabled: false
      },
    series: [
      {
        type: "pie",
        innerSize: "50%",
        data: [
          ["", 54.0],
          ["", 46.0],
        ],
      },
    ],
  };

  useEffect(() => {
    const chartLeft = Highcharts.chart(
      "dataRevealedChart",
      dataRevealedChartOptions
    );
    const chartRight = Highcharts.chart(
      "dataContactRevealedChart",
      contactRevealedChartOptions
    );

    return () => {
      chartLeft.destroy();
      chartRight.destroy();
    };
  }, []);
  return (
    <div className="w-full p-6 bg-white rounded-xl border border-stone-250 flex-col justify-start items-center gap-4 flex">
      <div className="w-full shrink basis-0 flex-col justify-center items-start gap-4 inline-flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 text-black text-xl font-normal font-Outfit leading-relaxed">
            Data Revealed
          </div>
        </div>
        <div className="text-neutral-400 text-sm font-normal font-Outfit leading-tight">
          Contact info revealed by type over time.
        </div>
        <div className="w-full flex flex-col lg:grid lg:grid-cols-6 gap-6">
          <div className="flex lg:col-span-4">
            <div id="dataRevealedChart" className="w-full"></div>
          </div>
          <div className="flex lg:col-span-2">
            <div className="w-full flex-col justify-end items-center gap-6 inline-flex">
              <div
                id="dataContactRevealedChart"
                className="w-44 h-44 relative"
              />
              <div className="w-full self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="w-full flex self-stretch p-4 bg-white rounded-md border border-stone-250 justify-between items-center inline-flex">
                  <div className="h-5 justify-start items-center gap-2 flex">
                    <MailSVGIcon className="w-5 h-5 relative fill-current text-stone-950" />
                    <div className="text-stone-950 text-sm font-normal font-Outfit leading-tight">
                      Email:
                    </div>
                  </div>
                  <div className="text-stone-950 text-base font-medium font-Outfit leading-snug">
                    54%
                  </div>
                </div>
                <div className="self-stretch p-4 bg-white rounded-md border border-stone-250 justify-between items-center inline-flex">
                  <div className="h-5 justify-start items-center gap-2 flex">
                    <CallSVGIcon className="w-5 h-5 relative fill-current text-stone-950" />
                    <div className="text-stone-950 text-sm font-normal font-Outfit leading-tight">
                      Phone:
                    </div>
                  </div>
                  <div className="text-stone-950 text-base font-medium font-Outfit leading-snug">
                    46%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
