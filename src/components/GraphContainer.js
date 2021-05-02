import React from 'react'
import { BarChart, XAxis, YAxis, Legend, Tooltip, Bar, ResponsiveContainer } from "recharts";

const GraphContainer = ({ selectedArrNew, tempSymbol }) => {
return <ResponsiveContainer width={window.matchMedia("(max-width: 768px)").matches ? "100%" : "70%"} height="40%">
 <BarChart margin={{top: 120, right: 0, left: 0, bottom: 0}}  data={selectedArrNew}>
  <XAxis dataKey="date" minTickGap={0} tick={{fontSize: 12}} />
  <YAxis hide={true} />
  <Tooltip cursor={false} />
  <Legend />
  <Bar unit={tempSymbol} label={{ position: 'top' }} radius={[10, 10, 0, 0]} dataKey="Temperature" fill="#6d68d4" />
 </BarChart>
</ResponsiveContainer>
}
export default GraphContainer