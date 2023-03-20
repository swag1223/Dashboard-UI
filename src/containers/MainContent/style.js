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
    justifyContent: 'space-between',
    gap: pxToRem(20),
    padding: spacing(4, 5),
    backgroundColor: secondary.extraLight,
    width: '100%',
  })
);

export default StyledMainContentContainer;
