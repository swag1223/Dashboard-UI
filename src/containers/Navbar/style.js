import { AppBar, Box, styled } from '@mui/material';

const NavItemsWrapper = styled(Box)(
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

const StyledAppBar = styled(AppBar)(
  ({
    theme: {
      palette: { common, secondary },
    },
  }) => ({
    backgroundColor: common.white,
    borderBottom: `1px solid ${secondary.border}`,
    top: 0,
    left: 0,
    right: 0,
  })
);

export { NavItemsWrapper, StyledAppBar };
