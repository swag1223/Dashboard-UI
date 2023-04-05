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
    padding: spacing(5),
    backgroundColor: secondary.extraLight,
    width: '100%',
  })
);

export { StyledMainContentContainer };
