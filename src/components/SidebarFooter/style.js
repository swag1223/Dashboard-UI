import { List, styled } from '@mui/material';

const StyledSidebarFooterList = styled(List)(
  ({
    theme: {
      palette: { common },
      typography: { pxToRem },
    },
  }) => ({
    backgroundColor: common.white,
    position: 'sticky',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: pxToRem(10),
  })
);

export { StyledSidebarFooterList };
