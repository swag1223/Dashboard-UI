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
  }) => ({
    fontSize: pxToRem(size),
    color: fontcolor,
    boxShadow: shadows[shadow],
    borderRadius: '50%',
    padding: pxToRem(padding),
  })
);

export default FontIcon;
