import { styled, Box } from '@mui/material';

const StyledSalesContainer = styled(Box)(
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

const StyledSalesHeading = styled(Box)(
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
    padding: spacing(5),
  })
);

export { StyledSalesContainer, StyledSalesHeading };
