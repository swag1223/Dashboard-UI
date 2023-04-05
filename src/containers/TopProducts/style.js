import { Box, styled } from '@mui/material';

const StyledTopProductsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isTablet',
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
    isTablet,
  }) => ({
    padding: isTablet ? spacing(4) : spacing(10, 5),
    width: isTablet ? '100%' : '70%',
    backgroundColor: white,
    display: 'flex',
    flexDirection: 'column',
    gap: pxToRem(20),
    borderRadius: shape.borderRadius,
    boxShadow: shadows[1],
  })
);

export { StyledTopProductsContainer };
