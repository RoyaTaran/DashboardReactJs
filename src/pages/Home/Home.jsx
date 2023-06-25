import React from "react";
import "./Home.css";
import Features from "../../components/Features/Features";
import { MonthChartData } from "./../../datds";
import Chart from "../../components/Charts/Chart";
import Widgetlg from "../../components/widgetlg/widgetlg";
import Widgetsm from "../../components/widgetsm/widgetsm";

export default function Home() {
  return (
    <>
      <div className="Features">
        <Features />
      </div>
      <div className="HomeChart"> <Chart title="فروش ماهانه" grid dataKey="sale" aspect='3' data={MonthChartData} /></div>
     
      <div className="widget">
        <Widgetlg />

        <Widgetsm />
      </div>
    </>
  );
}
