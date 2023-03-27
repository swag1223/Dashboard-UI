import { Box, styled } from '@mui/material';

const StyledTopProductsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(
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
    isMobile,
  }) => ({
    padding: isMobile ? spacing(4) : spacing(6),
    width: isMobile ? '100%' : '65%',
    backgroundColor: white,
    display: 'flex',
    flexDirection: 'column',
    gap: pxToRem(20),
    borderRadius: shape.borderRadius,
    boxShadow: shadows[1],
  })
);

export default StyledTopProductsContainer;
