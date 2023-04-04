import { Box, styled } from '@mui/material';

const StyledFooterContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(
  ({
    theme: {
      palette: {
        common: { white },
      },
      typography: { pxToRem },
      shape: { borderRadius },
      spacing,
    },
    isMobile,
  }) => ({
    backgroundColor: white,
    borderRadius,
    minHeight: pxToRem(112),
    gap: pxToRem(4),
    display: 'flex',
    padding: isMobile ? spacing(8) : spacing(4),
    justifyContent: 'space-between',
    alignItems: isMobile ? 'flex-start' : 'center',
    flexDirection: isMobile ? 'column' : 'row',
  })
);

export { StyledFooterContainer };
