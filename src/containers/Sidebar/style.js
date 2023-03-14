import { Drawer, List, styled } from '@mui/material';

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }) => ({
  '& .MuiDrawer-root': {
    position: 'sticky',
    top: isMobile ? '56px' : '65px',
    maxWidth: '300px',
    height: isMobile ? 'calc(100vh - 56px)' : 'calc(100vh - 65px)',
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid blue',
  },
  '& .MuiPaper-root': {
    position: 'sticky',
    top: isMobile ? '56px' : '65px',
    maxWidth: '300px',
    height: isMobile ? 'calc(100vh - 56px)' : 'calc(100vh - 65px)',
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid blue',
    // overflow: 'hidden',
  },
}));

export const StyledSidebarMainList = styled(List)(() => ({
  backgroundColor: 'background.paper',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',
  alignItems: 'center',
  flexDirection: 'column',
}));
