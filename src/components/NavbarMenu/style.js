import { Menu, styled } from '@mui/material';

const StyledNavbarMenu = styled(Menu)(
  ({
    theme: {
      typography: { pxToRem },
      shadows,
    },
  }) => ({
    '& .MuiPaper-root': {
      borderRadius: pxToRem(8),
      minWidth: pxToRem(200),
      boxShadow: shadows[4],
    },
  })
);

export default StyledNavbarMenu;
