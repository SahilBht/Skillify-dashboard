import React from "react";
import QuickGuide from "./chartareacomponents/QuickGuide";
import Revenue from "./chartareacomponents/Revenue";
import Visitors from "./chartareacomponents/Visitors";
import Sale from "./chartareacomponents/Sale";
import WeeklySale from "./chartareacomponents/WeeklySale";
import StudentQuery from './chartareacomponents/StudentQuery';

function GraphArea() {
  return (
    <div className="flex flex-col w-auto">
      <QuickGuide />

      <div className="flex">
        <div className="ml-5" style={{ height: "400px", flex: "1 0 50%" }}>
          <Revenue />
        </div>
        <div style={{ height: "400px", flex: "1 0 50%" }}>
          <Visitors />
        </div>
      </div>

      <div className="flex">
        <div className="ml-5" style={{ height: "400px", flex: "1 0 50%" }}>
          <Sale />
        </div>
        <div style={{ height: "400px", flex: "1 0 50%" }}>
          <WeeklySale />
        </div>
        <div style={{ height: "400px", flex: "1 0 50%" }}>
          <StudentQuery />
        </div>
      </div>
      
    </div>
  );
}

export default GraphArea;
