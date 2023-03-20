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
import CONSTANTS from '@constants/index';
import {
  StyledSalesContainer,
  StyledSalesHeading,
  StyledTooltipContainer,
  StyledTooltipSalesIndicator,
  StyledTooltipSalesIndicatorWrapper,
} from './style';

/**
 *Takes a datetimestamp and returns a formatted date string.
 *Takes a datetimestamp to format and returns formatted date string in the format "DD MMM YYYY".
 */
const dateFormatter = (tick) => {
  const datetime = new Date(tick);
  const date = datetime.getDate().toString().padStart(2, '0');
  const month = datetime.toLocaleString('default', { month: 'short' });
  const year = datetime.getFullYear();

  return `${date} ${month} ${year}`;
};

/**
 * appends 'K' as unit at the end of the value
 */
const salesUnitFormatter = (tick) => {
  return `${tick} K`;
};

/**
 * CustomTooltip component.
 * @param {boolean} props.customActive - Indicates whether the tooltip is active or not.
 * @param {Array<Object>} props.payload - The data payload for the tooltip.
 * @param {string} props.label - The label for the tooltip.
 * @param {string} props.color - The color for indicator inside the tooltip.
 * @returns {JSX.Element|null} The CustomTooltip component.
 */
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
  // HOOKS
  const dispatch = useDispatch();
  const { salesData } = useSelector((state) => state.salesData);

  /**
   * To handle the state whether tooltip is visible or not
   */
  const [isToolTipActive, setIsTooltipActive] = useState(false);

  /**
   * To set the position of tooltip
   * React state variable for tooltip position
   * @typedef {Object} ToolTipPosition
   * @property {number} x - The x coordinate of the tooltip
   * @property {number} y - The y coordinate of the tooltip
   *
   */
  const [toolTipPosition, setToolTipPosition] = useState({});

  const theme = useTheme();
  const {
    palette: {
      primary,
      common: { GRAY, GREEN },
    },
  } = theme;
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  /**
   * A custom comparator to sort the data on the basis on date before plotting values
   * creates a new sorted array based on the input sales data array.
   * @function
   * @param {Array<Object>} salesData - An array of sales data objects.
   * @returns {Array<Object>} A new sorted array of sales data objects.
   */
  const sortedData = [...salesData].sort(
    (a, b) => new Date(a.datetime) - new Date(b.datetime)
  );

  /**
   * dispacthes action of requesting sales data
   */
  useEffect(() => {
    dispatch(requestSalesData());
  }, []);

  return (
    <StyledSalesContainer>
      <StyledSalesHeading>
        <Typography variant='h4'>Sales</Typography>
        <FontIcon
          className='icon-exclamation-circle'
          size={18}
          fontcolor={GRAY[500]}
        />
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
              height={
                isMobile
                  ? CONSTANTS.X_AXIS_HEIGHT_MOBILE
                  : CONSTANTS.X_AXIS_HEIGHT_DESKTOP
              }
              allowDuplicatedCategory={false}
              tickLine={false}
              padding={{ left: 30, right: 30 }}
              dx={
                isMobile
                  ? CONSTANTS.HORIZONTAL_DISTANCE_OF_XTICKS_FROM_AXIS_MOBILE
                  : CONSTANTS.HORIZONTAL_DISTANCE_OF_XTICKS_FROM_AXIS_DESKTOP
              }
              dy={
                isMobile
                  ? CONSTANTS.VERTICAL_DISTANCE_OF_XTICKS_FROM_AXIS_MOBILE
                  : CONSTANTS.VERTICAL_DISTANCE_OF_XTICKS_FROM_AXIS_DESKTOP
              }
              angle={isMobile ? CONSTANTS.ROTATE_TICK_BY_ANGLE : 0}
              tick={{ fontSize: CONSTANTS.TICK_FONT_SIZE }}
              interval={0} // No tick value is lost during window resize
            />

            {!isMobile && (
              <YAxis
                dx={-10}
                axisLine={false}
                tickFormatter={salesUnitFormatter}
                tickLine={false}
                tick={{ fontSize: CONSTANTS.TICK_FONT_SIZE }}
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
                r: CONSTANTS.ACTIVE_DOT_RADIUS,
                strokeWidth: CONSTANTS.ACTIVE_DOT_RADIUS,
                cursor: 'pointer',
                onClick: () => setIsTooltipActive((state) => !state),
                onMouseLeave: () => setIsTooltipActive(false),
                onMouseMove: (event, data) => {
                  setToolTipPosition({
                    x: data.cx + CONSTANTS.TOOLTIP_POSITION_X_COORIDANTE,
                    y: data.cy - CONSTANTS.TOOLTIP_POSITION_Y_COORIDANTE,
                  });
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
