import { Box, styled } from '@mui/material';

const StyledErrorPageContainer = styled(Box)(
  ({
    theme: {
      spacing,
      palette: {
        common: { GRAY },
      },
    },
  }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: GRAY[50],
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: spacing(3),
  })
);

export default StyledErrorPageContainer;
