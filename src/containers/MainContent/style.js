import { Box, styled } from '@mui/material';

const StyledMainContentContainer = styled(Box)(
  ({
    theme: {
      spacing,
      palette: { secondary },
      typography: { pxToRem },
    },
  }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: pxToRem(20),
    padding: spacing(4, 5),
    backgroundColor: secondary.extraLight,
    // width: '100%',
    width: `calc(100vw - 250px)`,

    // border: '1px solid green',
  })
);

export default StyledMainContentContainer;
