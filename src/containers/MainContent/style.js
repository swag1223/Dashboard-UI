import { Box, styled } from '@mui/material';

const StyledMainContentContainer = styled(Box)(
  ({
    theme: {
      palette: { secondary },
      typography: { pxToRem },
    },
  }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: `${pxToRem(15)} ${pxToRem(20)}`,
    backgroundColor: secondary.extraLight,
    width: '100%',
  })
);

export default StyledMainContentContainer;
