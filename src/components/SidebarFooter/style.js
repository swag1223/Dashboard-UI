import { List, styled } from '@mui/material';

const StyledSidebarFooterList = styled(List)(
  ({
    theme: {
      palette: { common },
    },
  }) => ({
    backgroundColor: common.white,
    position: 'sticky',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
  })
);

export default StyledSidebarFooterList;
