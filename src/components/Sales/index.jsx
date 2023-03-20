import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import FontIcon from '@components/styledComponents/FontIcon';
import { requestSalesData } from '@store/sales';
import {
  StyledSalesContainer,
  StyledSalesHeading,
  StyledTooltipContainer,
  StyledTooltipSalesIndicator,
  StyledTooltipSalesIndicatorWrapper,
} from './style';

const dateFormatter = (tick) => {
  const datetime = new Date(tick);
  const date = datetime.getDate().toString().padStart(2, '0');
  const month = datetime.toLocaleString('default', { month: 'short' });
  const year = datetime.getFullYear();

  return `${date} ${month} ${year}`;
};

const salesUnitFormatter = (tick) => {
  return `${tick} K`;
};

const CustomTooltip = ({ customActive, payload, label, color }) => {
  if (customActive && payload) {
    return (
      <StyledTooltipContainer>
        <Typography variant='body2' color='secondary.main'>
          {dateFormatter(label)}
        </Typography>
        <StyledTooltipSalesIndicatorWrapper>
          <StyledTooltipSalesIndicator color={color} />
          <Typography variant='body1' color='secondary.main'>
            Sales:
          </Typography>
          <Typography variant='body1'>{`$${payload[0].value}k`}</Typography>
        </StyledTooltipSalesIndicatorWrapper>
      </StyledTooltipContainer>
    );
  }
  return null;
};

const Sales = () => {
  const { salesData } = useSelector((state) => state.salesData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestSalesData());
  }, []);

  const sortedData = [...salesData].sort(
    (a, b) => new Date(a.datetime) - new Date(b.datetime)
  );

  const [isToolTipActive, setIsTooltipActive] = useState(false);
  const [toolTipPosition, setToolTipPosition] = useState({});

  const theme = useTheme();
  const {
    palette: {
      primary,
      common: { GRAY, GREEN },
    },
  } = theme;

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <StyledSalesContainer>
      <StyledSalesHeading>
        <Typography variant='h4'>Sales</Typography>
        <FontIcon className='icon-globe' size={18} fontcolor={GRAY[500]} />
      </StyledSalesHeading>
      <Box>
        <ResponsiveContainer width='99%' height={390}>
          <LineChart
            data={sortedData}
            margin={{
              top: 5,
              right: 15,
              left: 15,
              bottom: 5,
            }}>
            <CartesianGrid vertical={false} />
            <XAxis
              axisLine={false}
              dataKey='datetime'
              tickFormatter={dateFormatter}
              height={isMobile ? 100 : 50}
              //   interval='preserveStartEnd'
              tickLine={false}
              padding={{ left: 30, right: 30 }}
              dx={isMobile ? -15 : 3}
              dy={isMobile ? 40 : 5}
              angle={isMobile ? -45 : 0}
              tick={{ fontSize: 13 }}
              interval={0}
            />
            {!isMobile && (
              <YAxis
                dx={-10}
                axisLine={false}
                tickFormatter={salesUnitFormatter}
                tickLine={false}
                tick={{ fontSize: 13 }}
              />
            )}

            <Tooltip
              color={GREEN[500]}
              cursor={{ strokeDasharray: 4 }}
              content={<CustomTooltip customActive={isToolTipActive} />}
              position={toolTipPosition}
              wrapperStyle={{
                outline: 'none',
              }}
            />

            <Line
              type='monotone'
              dataKey='sales'
              stroke={primary.main}
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 8,
                strokeWidth: 3,
                cursor: 'pointer',
                onClick: () => setIsTooltipActive((state) => !state),
                onMouseLeave: () => setIsTooltipActive(false),
                onMouseMove: (event, data) => {
                  setToolTipPosition({ x: data.cx - 70, y: data.cy - 120 });
                },
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </StyledSalesContainer>
  );
};

CustomTooltip.propTypes = {
  customActive: PropTypes.bool.isRequired,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
  label: PropTypes.string,
  color: PropTypes.string,
};

CustomTooltip.defaultProps = {
  payload: [],
  label: '',
  color: '',
};

export default Sales;
