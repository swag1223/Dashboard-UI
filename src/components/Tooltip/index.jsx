import { Typography } from '@mui/material';

import PropTypes from 'prop-types';

import {
  StyledTooltipContainer,
  StyledTooltipSalesIndicator,
  StyledTooltipSalesIndicatorWrapper,
} from '@components/Graph/style';

/**
 * CustomTooltip component.
 * @param {boolean} props.customActive - Indicates whether the tooltip is active or not.
 * @param {Array<Object>} props.payload - The data payload for the tooltip.
 * @param {string} props.label - The label for the tooltip.
 * @param {string} props.color - The color for indicator inside the tooltip.
 * @returns {JSX.Element|null} The CustomTooltip component.
 */
const CustomTooltip = ({
  customActive,
  payload,
  label,
  color,
  labelFormatter,
  valueFormatter,
}) => {
  if (customActive && payload) {
    return (
      <StyledTooltipContainer>
        <Typography variant='body2' color='secondary.main'>
          {labelFormatter(label)}
        </Typography>
        <StyledTooltipSalesIndicatorWrapper>
          <StyledTooltipSalesIndicator color={color} />
          <Typography variant='body1' color='secondary.main'>
            Sales:
          </Typography>
          <Typography variant='body1'>
            {valueFormatter(payload[0].value)}
          </Typography>
        </StyledTooltipSalesIndicatorWrapper>
      </StyledTooltipContainer>
    );
  }
  return null;
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
  labelFormatter: PropTypes.func,
  valueFormatter: PropTypes.func,
};

CustomTooltip.defaultProps = {
  payload: [],
  label: '',
  color: '',
  labelFormatter: () => {},
  valueFormatter: () => {},
};

export default CustomTooltip;
