import { Box, styled } from '@mui/material';

const StyledFooterContainer = styled(Box)(
  ({
    theme: {
      palette: {
        common: { white },
      },
      typography: { pxToRem },
      shape: { borderRadius },
      spacing,
    },
  }) => ({
    backgroundColor: white,
    borderRadius,
    minHeight: pxToRem(112),
    gap: pxToRem(4),
    padding: spacing(4),
  })
);

export default StyledFooterContainer;
