import React from "react";
import "./chart.scss";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useQuery } from "react-query";
import $ from "jquery";

export default function MotorRpm() {
  const fetchMotorRpm = async () => {
    const response = await fetch(
      "https://takehome-frontend.oden.network/?metric=motor-rpm"
    );
    return response.json();
  };
  const { data, status } = useQuery("motorRpm", fetchMotorRpm);

  if (status === "loading") {
    return <div>Loading</div>;
  }
  if (status === "error") {
    return <div>Error</div>;
  }

  const datas = [
    ...data.series.map((elem) => {
      return {
        name: elem[0].slice(elem[0].indexOf("T") + 1, elem[0].indexOf("Z") - 4),
        min: elem[1][0],
        avg: elem[1][1],
        max: elem[1][2],
      };
    }),
  ];
  return (
    <div className="speedChart" style={{ padding: "50px" }}>
      <div className="speedLabel">
        <div>
          <button
            className="titleButton"
            type="button"
            onClick={() => {
              $(".label1").show();
              $(".label2").hide();
              $(".barChart").hide();
              $(".lineChart1").show();
            }}
          >
            Line Charts
          </button>
          <button
            className="titleButton"
            type="button"
            onClick={() => {
              $(".label1").hide();
              $(".label2").show();
              $(".lineChart").hide();
              $(".barChart1").show();
            }}
          >
            Bar Charts
          </button>
        </div>
        <div className="label1">
          <button
            className="button"
            type="button"
            onClick={() => {
              $(".lineChart1").show();
              $(".lineChart2").hide();
              $(".lineChart3").hide();
              $(".lineChart4").hide();
            }}
          >
            All
          </button>
          <button
            className="button button1"
            type="button"
            onClick={() => {
              $(".lineChart1").hide();
              $(".lineChart2").show();
              $(".lineChart3").hide();
              $(".lineChart4").hide();
            }}
          >
            minimum
          </button>
          <button
            className="button button2"
            type="button"
            onClick={() => {
              $(".lineChart1").hide();
              $(".lineChart2").hide();
              $(".lineChart3").show();
              $(".lineChart4").hide();
            }}
          >
            Average
          </button>
          <button
            className="button button3"
            type="button"
            onClick={() => {
              $(".lineChart1").hide();
              $(".lineChart2").hide();
              $(".lineChart3").hide();
              $(".lineChart4").show();
            }}
          >
            Maximum
          </button>
        </div>
        <div className="label2">
          <button
            className="button "
            type="button"
            onClick={() => {
              $(".barChart1").show();
              $(".barChart2").hide();
              $(".barChart3").hide();
              $(".barChart4").hide();
            }}
          >
            All
          </button>
          <button
            className="button button1"
            type="button"
            onClick={() => {
              $(".barChart1").hide();
              $(".barChart2").show();
              $(".barChart3").hide();
              $(".barChart4").hide();
            }}
          >
            minimum
          </button>
          <button
            className="button button2"
            type="button"
            onClick={() => {
              $(".barChart1").hide();
              $(".barChart2").hide();
              $(".barChart3").show();
              $(".barChart4").hide();
            }}
          >
            Average
          </button>
          <button
            className="button button3"
            type="button"
            onClick={() => {
              $(".barChart1").hide();
              $(".barChart2").hide();
              $(".barChart3").hide();
              $(".barChart4").show();
            }}
          >
            Maximum
          </button>
        </div>
      </div>
      <div className="lineChart lineChart1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={datas}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="min" stroke="green" />
            <Line type="monotone" dataKey="avg" stroke="blue" />
            <Line type="monotone" dataKey="max" stroke="red" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="lineChart lineChart2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={datas}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="min" stroke="green" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="lineChart lineChart3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={datas}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="avg" stroke="blue" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="lineChart lineChart4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={datas}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="max" stroke="red" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="barChart barChart1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={datas}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="min" fill="green" />
            <Bar dataKey="avg" fill="blue" />
            <Bar dataKey="max" fill="red" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="barChart barChart2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={datas}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="min" fill="green" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="barChart barChart3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={datas}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="avg" fill="blue" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="barChart barChart4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={datas}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="max" fill="red" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
