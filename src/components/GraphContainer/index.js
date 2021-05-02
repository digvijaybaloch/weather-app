import React from 'react'
import { BarChart, XAxis, YAxis, Legend, Tooltip, Bar, ResponsiveContainer } from "recharts";

const GraphContainer = ({ selectedArrNew, tempSymbol }) => {
return <ResponsiveContainer data-testid="responsiveContainer" width={window && window.matchMedia("(max-width: 768px)") && window.matchMedia("(max-width: 768px)").matches ? "100%" : "70%"} height="40%">
 <BarChart data-testid="barChart" margin={{top: window && window.matchMedia("(max-width: 768px)") && window.matchMedia("(max-width: 768px)").matches ? 160 : 130, right: 0, left: 0, bottom: 0}}  data={selectedArrNew}>
  <XAxis data-testid="xAxis" dataKey="date" minTickGap={0} tick={{fontSize: 12}} />
  <YAxis data-testid="yAxis" hide={true} />
  <Tooltip data-testid="tooltip" cursor={false} />
  <Legend data-testid="legend" />
  <Bar data-testid="bar" unit={tempSymbol} label={{ position: 'top' }} radius={[10, 10, 0, 0]} dataKey="Temperature" fill="#6d68d4" />
 </BarChart>
</ResponsiveContainer>
}
export default GraphContainer