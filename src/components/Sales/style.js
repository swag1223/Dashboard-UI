import { styled, Box } from '@mui/material';

const StyledTooltipContainer = styled(Box)(
  ({
    theme: {
      palette: {
        common: { white },
      },
      shadows,
      shape: { borderRadius },
    },
  }) => ({
    // border: 'none',
    boxShadow: shadows[1],
    width: '148px',
    height: '94px',
    backgroundColor: white,
    borderRadius,
    padding: '10px',
  })
);

export default StyledTooltipContainer;
