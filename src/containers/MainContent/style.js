import { Box, styled } from '@mui/material';

const StyledMainContentContainer = styled(Box)(
  ({
    theme: {
      spacing,
      palette: { secondary },
    },
  }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: spacing(4, 5),
    backgroundColor: secondary.extraLight,
    width: '100%',
  })
);

export default StyledMainContentContainer;
