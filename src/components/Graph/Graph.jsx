import { useState } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import CustomTooltip from '@components/CustomTooltip';
import CONSTANTS from '@constants/index';
import useViewportContext from '@hooks/useViewPortContext';

const Graph = (props) => {
  const {
    data,
    xAxisDataKey,
    valueToPlot,
    xAxisTickFormatter,
    yAxisTickFormatter,
  } = props;

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
  const { isTablet } = useViewportContext();
  const theme = useTheme();

  const {
    palette: {
      primary,
      common: { GREEN },
    },
  } = theme;

  return (
    <ResponsiveContainer
      /**
       * with width=' 100%' , responsive container doesnt resize properly ,
       * a viable fix is to set width to 99% with a height
       */
      width='99%'
      height={CONSTANTS.GRAPH_RESPONSIVE_CONTAINER_HEIGHT}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 15,
          left: 15,
          bottom: 5,
        }}>
        <CartesianGrid vertical={false} strokeOpacity={0.3} />
        <XAxis
          axisLine={false}
          dataKey={xAxisDataKey}
          tickFormatter={xAxisTickFormatter}
          height={
            isTablet
              ? CONSTANTS.X_AXIS_HEIGHT_MOBILE
              : CONSTANTS.X_AXIS_HEIGHT_DESKTOP
          }
          tickLine={false}
          padding={{ left: 30, right: 30 }}
          dx={
            isTablet
              ? CONSTANTS.HORIZONTAL_DISTANCE_OF_XTICKS_FROM_AXIS_MOBILE
              : CONSTANTS.HORIZONTAL_DISTANCE_OF_XTICKS_FROM_AXIS_DESKTOP
          }
          dy={
            isTablet
              ? CONSTANTS.VERTICAL_DISTANCE_OF_XTICKS_FROM_AXIS_MOBILE
              : CONSTANTS.VERTICAL_DISTANCE_OF_XTICKS_FROM_AXIS_DESKTOP
          }
          angle={isTablet ? CONSTANTS.ROTATE_TICK_BY_ANGLE : 0}
          tick={{ fontSize: CONSTANTS.TICK_FONT_SIZE }}
          interval={0} // No tick value is lost during window resize
        />

        {!isTablet && (
          <YAxis
            dx={CONSTANTS.HORIZONTAL_DISTANCE_OF_YTICKS_FROM_AXIS}
            axisLine={false}
            tickFormatter={yAxisTickFormatter}
            tickLine={false}
            tick={{ fontSize: CONSTANTS.TICK_FONT_SIZE }}
          />
        )}

        <Tooltip
          color={GREEN[500]}
          cursor={{ strokeDasharray: 4 }}
          content={
            <CustomTooltip
              customActive={isToolTipActive}
              labelFormatter={xAxisTickFormatter}
              valueFormatter={yAxisTickFormatter}
              plottedValue='Sales'
            />
          }
          position={toolTipPosition}
          wrapperStyle={{
            outline: 'none',
          }}
        />

        <Line
          type='monotone'
          dataKey={valueToPlot}
          stroke={primary.main}
          strokeWidth={3}
          dot={false}
          activeDot={{
            r: CONSTANTS.ACTIVE_DOT_RADIUS,
            strokeWidth: CONSTANTS.ACTIVE_DOT_BORDER,
            cursor: 'pointer',
            onClick: () => setIsTooltipActive((state) => !state),
            onMouseLeave: () => setIsTooltipActive(false),
            onMouseMove: (event, data) => {
              setToolTipPosition({
                x: data.cx + CONSTANTS.TOOLTIP_POSITION_X_COORIDANTE,
                y: data.cy + CONSTANTS.TOOLTIP_POSITION_Y_COORIDANTE,
              });
            },
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

Graph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      datetime: PropTypes.string,
      sales: PropTypes.number,
    })
  ).isRequired,
  xAxisDataKey: PropTypes.string.isRequired,
  valueToPlot: PropTypes.string.isRequired,
  xAxisTickFormatter: PropTypes.func,
  yAxisTickFormatter: PropTypes.func,
};

Graph.defaultProps = {
  xAxisTickFormatter: () => {},
  yAxisTickFormatter: () => {},
};

export default Graph;
