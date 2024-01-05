import React from "react";
import { Activity } from "lucide-react";

function QuickGuide() {
  return (
    <div className="grid mt-5 ml-9 grid-cols-4 text-[#605c94]">
      <div
        className="flex"
        style={{
          borderLeft: "1px solid #605c94",
          height: "100%",
          margin: "0 10px",
        }}
      >
        <div>
          <h3 className="font-semibold ml-4">Impressions</h3>
          <h5 className="ml-4 font-bold">832</h5>
        </div>
        <div>
          <Activity
            className="opacity-80 ml-28"
            color="#605c94"
            strokeWidth={1}
            size={40}
          />
        </div>
      </div>
      <div
        className="flex"
        style={{
          borderLeft: "1px solid #605c94",
          height: "100%",
          margin: "0 10px",
        }}
      >
        <div>
          <h3 className="font-semibold ml-4">Total Audience</h3>
          <h5 className="ml-4 font-bold">832</h5>
        </div>
        <div>
          <Activity
            className="opacity-80 ml-28"
            color="#605c94"
            strokeWidth={1}
            size={40}
          />
        </div>
      </div>
      <div
        className="flex"
        style={{
          borderLeft: "1px solid #605c94",
          height: "100%",
          margin: "0 10px",
        }}
      >
        <div>
          <h3 className="font-semibold ml-4">Engagements</h3>
          <h5 className="ml-4 font-bold">832</h5>
        </div>
        <div>
          <Activity
            className="opacity-80 ml-28"
            color="#605c94"
            strokeWidth={1}
            size={40}
          />
        </div>
      </div>
      <div
        className="flex"
        style={{
          borderLeft: "1px solid #605c94",
          height: "100%",
          margin: "0 10px",
        }}
      >
        <div>
          <h3 className="font-semibold ml-4">Engaged Audience</h3>
          <h5 className="ml-4 font-bold">832</h5>
        </div>
        <div>
          <Activity
            className="opacity-80 ml-28"
            color="#605c94"
            strokeWidth={1}
            size={40}
          />
        </div>
      </div>
    </div>
  );
}

export default QuickGuide;
