// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   // ResponsiveContainer,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

// import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
// import FontIcon from '@components/styledComponents/FontIcon';
// import StyledTooltipContainer from './style';

// // import Tooltip from '@mui/material/Tooltip';
// const dateFormatter = (tick) => {
//   const datetime = new Date(tick);
//   const date = datetime.getDate().toString().padStart(2, '0');
//   const month = datetime.toLocaleString('default', { month: 'short' });
//   //   const year = datetime.getFullYear();

//   return `${date} ${month}`;
// };

// const salesUnitFormatter = (tick) => {
//   return `${tick} K`;
// };

// const CustomTooltip = ({
//   active,
//   payload,
//   label,
//   color,
//   arrow,
//   // showTooltip,
//   // activeIndex,
// }) => {
//   //   console.log(active, payload, label);
//   if (
//     // showTooltip &&
//     // activeIndex === label &&
//     active &&
//     payload
//     // payload.length
//   ) {
//     return (
//       <StyledTooltipContainer arrow={arrow}>
//         <Typography variant='body2' color='secondary.main'>
//           {label}
//         </Typography>
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',

//             gap: '8px',
//           }}>
//           <Box
//             sx={{
//               borderRadius: '50%',
//               backgroundColor: color,
//               height: '10px',
//               width: '10px',
//             }}
//           />
//           <Typography variant='body1' color='secondary.main'>
//             Sales:{' '}
//           </Typography>
//           <Typography variant='body1'>{`$${payload[0].value}k`}</Typography>
//         </Box>
//       </StyledTooltipContainer>
//     );
//   }
//   return null;
// };

// const Sales = ({ salesData }) => {
//   // const [activeIndex, setActiveIndex] = useState(0);
//   // const activeItem = salesData[activeIndex];

//   const handleClick = () => {
//     console.log('hi');
//   };
//   // const handleClick = useCallback(
//   //   (entry, index) => {
//   //     setActiveIndex(index);
//   //   },
//   //   [setActiveIndex]
//   // );
//   // const [activeIndex, setActiveIndex] = useState(null);
//   // const [showTooltip, setShowTooltip] = useState(false);

//   // const handleClick = (data) => {
//   //   console.log(data.index);
//   //   setActiveIndex(data.index);
//   //   setShowTooltip(true);
//   //   console.log('line clicked');
//   //   // console.log(index);

//   //   // setActiveIndex(index);
//   // };

//   // const handleChartClick = () => {
//   //   setActiveIndex(null);
//   // };

//   // const handleLineHover = (data, index) => {
//   //   setActiveIndex(null);
//   // };

//   const theme = useTheme();
//   const {
//     palette: {
//       primary,
//       common: { GRAY, GREEN },
//     },
//   } = theme;

//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   return (
//     <Box
//       sx={{
//         backgroundColor: 'white',
//         padding: '20px',
//       }}>
//       <Box
//         sx={{
//           display: 'flex',
//           marginBottom: '20px',
//           alignItems: 'center',
//           gap: '10px',
//           //   border: '1px solid red',
//         }}>
//         <Typography variant='h4'>Sales</Typography>
//         <FontIcon className='icon-globe' size={18} fontcolor={GRAY[500]} />
//       </Box>
//       <Box>
//         <ResponsiveContainer width='99%' height={350}>
//           <LineChart
//             width={900}
//             height={300}
//             data={salesData}
//             // onClick={handleChartClick}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}>
//             <CartesianGrid vertical={false} />
//             <XAxis
//               axisLine={false}
//               interval={0}
//               dataKey='datetime'
//               tickFormatter={dateFormatter}
//               height={110}
//               //   interval='preserveStartEnd'
//               tickLine={false}
//               padding={{ left: 30, right: 30 }}
//               dx={isMobile ? -45 : 3}
//               dy={40}
//               angle={isMobile ? -45 : 0}
//               minTickGap={20}
//             />
//             <YAxis
//               dx={-10}
//               axisLine={false}
//               //   dataKey='amt'
//               // unit='K'
//               padding={{ left: 30, right: 30 }}
//               tickFormatter={salesUnitFormatter}
//               tickLine={false}
//             />

//             <Tooltip
//               // trigger='click'
//               // GREEN={GREEN[500]}
//               color={GREEN[500]}
//               cursor={{ strokeDasharray: 4 }}
//               content={<CustomTooltip />}
//               wrapperStyle={{ outline: 'none' }}
//               label={dateFormatter}
//               // active
//               // payload={[data[activeIndex]]}
//               // label={data[activeIndex.name]}
//             />

//             {/* <Legend /> */}
//             {/* {clicked && activePoint && (
//               <Tooltip content={activePoint.value} trigger='click' />
//             )} */}

//             <Line
//               cursor='pointer'
//               type='monotone'
//               dataKey='sales'
//               stroke={primary.main}
//               strokeWidth={3}
//               dot={false}
//               onClick={handleClick}
//               activeDot={{ r: 8, strokeWidth: 3 }}
//               // onMouseEnter={handleLineMouseEnter}
//               // onMouseLeave={handleLineMouseLeave}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </Box>
//     </Box>
//   );
// };
// export default Sales;
