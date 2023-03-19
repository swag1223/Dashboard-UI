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
    justifyContent: 'space-between',
    gap: '20px',
    padding: `${pxToRem(15)} ${pxToRem(20)}`,
    backgroundColor: secondary.extraLight,
    // width: '100%',
    width: `calc(100vw - 250px)`,

    // border: '1px solid green',
  })
);

export default StyledMainContentContainer;
