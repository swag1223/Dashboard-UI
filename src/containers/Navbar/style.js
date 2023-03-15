import { AppBar, Box, styled } from '@mui/material';

export const NavItemsWrapper = styled(Box)(
  ({
    theme: {
      typography: { pxToRem },
    },
    gap,
  }) => ({
    display: 'flex',
    gap: pxToRem(gap),
  })
);

export const StyledAppBar = styled(AppBar)(
  ({
    theme: {
      palette: { common, secondary },
    },
  }) => ({
    backgroundColor: common.white,
    borderBottom: `1px solid ${secondary.border}`,
  })
);
