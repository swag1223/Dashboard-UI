import { Box, styled } from '@mui/material';

const StyledTransactionsContainer = styled(Box)(
  ({
    theme: {
      spacing,
      shape,
      shadows,
      palette: {
        common: { white },
      },
      typography: { pxToRem },
    },
  }) => ({
    padding: spacing(6, 4),
    backgroundColor: white,
    display: 'flex',
    flexDirection: 'column',
    gap: pxToRem(25),
    borderRadius: shape.borderRadius,
    boxShadow: shadows[1],
  })
);

export { StyledTransactionsContainer };
