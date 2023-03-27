import { Box, styled } from '@mui/material';

export const StyledTooltipContainer = styled(Box)(
  ({
    theme: {
      palette: {
        secondary: { border },
        common: { white },
      },
      shadows,
      shape: { borderRadius },
      typography: { pxToRem },
    },
  }) => ({
    boxShadow: shadows[1],
    maxWidth: pxToRem(140),
    height: pxToRem(94),
    backgroundColor: white,
    borderRadius,
    padding: pxToRem(10),
    postion: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      backgroundColor: 'white',
      width: pxToRem(15),
      height: pxToRem(15),
      bottom: 0,
      borderBottom: `1px solid ${border}`,
      borderRight: `1px solid ${border}`,
      left: '45%',
      transform: 'translateY(50%) rotate(45deg)',
      zIndex: 0,
    },
  })
);

export const StyledTooltipSalesIndicator = styled(Box)(
  ({
    theme: {
      typography: { pxToRem },
    },
    color,
  }) => ({
    borderRadius: '50%',
    backgroundColor: color,
    height: pxToRem(10),
    width: pxToRem(10),
  })
);

export const StyledTooltipSalesIndicatorWrapper = styled(Box)(
  ({
    theme: {
      typography: { pxToRem },
    },
  }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: pxToRem(8),
  })
);
