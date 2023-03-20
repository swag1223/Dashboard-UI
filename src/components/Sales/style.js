import { styled, Box } from '@mui/material';

export const StyledSalesContainer = styled(Box)(
  ({
    theme: {
      palette: {
        common: { white },
      },
      shape: { borderRadius },
      spacing,
      shadows,
    },
  }) => ({
    backgroundColor: white,
    padding: spacing(0.5),
    borderRadius,
    boxShadow: shadows[1],
  })
);

export const StyledSalesHeading = styled(Box)(
  ({
    theme: {
      spacing,
      typography: { pxToRem },
    },
  }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: pxToRem(15),
    marginBottom: spacing(5),
    padding: spacing(2),
  })
);

export const StyledTooltipContainer = styled(Box)(
  ({
    theme: {
      palette: {
        secondary: { border },
        common: { white },
      },
      shadows,
      shape: { borderRadius },
    },
  }) => ({
    boxShadow: shadows[1],
    maxWidth: '140px',
    height: '94px',
    backgroundColor: white,
    borderRadius,
    padding: '10px',
    postion: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      backgroundColor: 'white',
      width: 15,
      height: 15,
      bottom: 0,
      borderBottom: `1px solid ${border}`,
      borderRight: `1px solid ${border}`,
      left: '42%',
      transform: 'translateY(50%) rotate(45deg)',
      zIndex: 0,
    },
  })
);

export const StyledTooltipSalesIndicator = styled(Box)(({ color }) => ({
  borderRadius: '50%',
  backgroundColor: color,
  height: '10px',
  width: '10px',
}));

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
