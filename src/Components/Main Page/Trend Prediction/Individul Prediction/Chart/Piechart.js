import React from "react";
import { PieChart, Pie } from "recharts";

function Piechart({ title, val, customClass }) {
  console.log("Title -", title, "Value -", val);

  const data = [
    { name: title, value: +val, fill: "#6237DE" },
    { name: "Empty", value: 360 - val, fill: "#CCBAFD" },
  ];

  const divideValue = +val / 360;

  const percentageValue = divideValue * 100;

  console.log(data);

  return (
    <div className="d-flex mx-4">
      <div className="me-3">
        <p className="fw-bold my-0">{title}</p>
        <h6 className="text-primary my-0">{percentageValue.toFixed(2)}%</h6>
      </div>
      <div>
        <PieChart width={48} height={48}>
          <Pie
            data={data}
            outerRadius={20}
            innerRadius={5}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          />
        </PieChart>
      </div>
    </div>
  );
}

export default Piechart;
