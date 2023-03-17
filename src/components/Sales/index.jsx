// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   // ResponsiveContainer,
//   Tooltip,
// } from 'recharts';
// import { useState } from 'react';
// import { Box, Typography, useTheme } from '@mui/material';
// // import Tooltip from '@mui/material/Tooltip';

// const CustomTooltip = ({
//   data,
//   active,
//   payload,
//   label,
//   // index,
//   // activeIndex,
// }) => {
//   if (active) {
//     // const { sales } = data[activeIndex].sales;
//     return (
//       <Box>
//         <Typography>{`Sales: ${label} `}</Typography>
//       </Box>
//     );
//   }
//   return null;
// };

// const Sales = ({ salesData }) => {
//   // const handleGraphClick = () => {
//   //   console.log('hi');
//   // };

//   // const [clicked, setClicked] = useState(false);
//   //   const [activeIndex, setActiveIndex] = useState(null);
//   //   const [showTooltip, setShowTooltip] = useState(false);

//   //   const [tooltipX, setTooltipX] = useState(null);
//   //   const [tooltipY, setTooltipY] = useState(null);

//   // const handleLineMouseEnter = (e, index) => {
//   //   setActiveIndex(index);
//   // };

//   // const handleLineMouseLeave = () => {
//   //   setActiveIndex(null);
//   // };

//   const handleLineHover = (event) => {
//     const { x, y, index } = event;
//     setActiveIndex(index);
//     setTooltipX(x);
//     setTooltipY(y);
//   };

//   const handleLineClick = (event, index) => {
//     // event.stopPropagation(null);
//     // setActiveIndex(activeIndex === index ? null : index);
//     // setActiveIndex(index);
//     // setClicked(true);
//     setShowTooltip(!showTooltip);
//   };

//   // const handleChartClick = () => {
//   //   // setClicked(false);
//   //   setActiveIndex(null);
//   // };

//   const theme = useTheme();
//   const {
//     palette: { primary },
//   } = theme;

//   return (
//     <Box sx={{ backgroundColor: 'white', padding: '20px 40px' }}>
//       <LineChart
//         width={900}
//         height={400}
//         data={salesData}
//         // onClick={handleChartClick}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}>
//         <CartesianGrid vertical={false} />
//         <XAxis
//           axisLine={false}
//           dataKey='date'
//           unit='April'
//           // interval={0}
//           tickLine={false}
//           padding={{ left: 30, right: 30 }}
//         />
//         <YAxis
//           axisLine={false}
//           dataKey='amt'
//           // interval='preserveStartEnd'
//           unit='K'
//           padding={{ left: 30, right: 30 }}
//           tickLine={false}
//         />
//         <Tooltip
//           cursor='pointer'
//           content={
//             <CustomTooltip
//               data={salesData}
//               // clicked={clicked}
//               activeIndex={activeIndex}
//             />
//           }
//           active={showTooltip}
//           position={{ x: tooltipX, y: tooltipY }}
//           // active={!!activePoint}
//           // payload={[activePoint]}
//           // trigger='click'
//         />
//         {/* <Legend /> */}
//         {/* {clicked && activePoint && (
//           <Tooltip content={activePoint.value} trigger='click' />
//         )} */}

//         <Line
//           type='monotone'
//           dataKey='sales'
//           stroke={primary.main}
//           dot={false}
//           activeDot={{ r: 8 }}
//           //   onMouseMove={handleLineHover}
//           //   onClick={handleLineClick}
//           // onMouseEnter={handleLineMouseEnter}
//           // onMouseLeave={handleLineMouseLeave}
//         />
//       </LineChart>
//     </Box>
//   );
// };
// export default Sales;
