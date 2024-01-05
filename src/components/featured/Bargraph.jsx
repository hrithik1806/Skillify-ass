import React from "react";
import "./BarGraph.css";

const BarGraph = () => {
  const chartData = [
    { year: "Monday", size: 20 },
    { year: "Tuesday", size: 80 },
    { year: "Wednesday", size: 40 },
    { year: "Thursday", size: 60 },
    { year: "Friday", size: 20 },
  ];

  return (
    <body>
      <section>
        <div className="container">
          <div className="chart-container">
            {chartData.map((data, index) => (
              <div className="chart-item" key={index}>
                <div className="bar">
                  <div
                    style={{ "--barSize": data.size }}
                    className="bar-item"
                    title={data.size}
                  ></div>
                </div>
                <div className="bar-label">{data.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </body>
  );
};

export default BarGraph;
