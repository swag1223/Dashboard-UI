import { Box, styled } from '@mui/material';

const FontIcon = styled(Box)(
  ({
    theme: {
      typography: { pxToRem },
      shadows,
    },
    size,
    fontcolor,
    padding = 0,
    shadow = 0,
  }) => {
    return {
      fontSize: pxToRem(size),
      boxShadow: shadows[shadow],
      borderRadius: '50%',
      padding: pxToRem(padding),
      color: fontcolor,
    };
  }
);

export default FontIcon;
