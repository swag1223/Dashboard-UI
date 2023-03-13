import { Drawer, List, styled } from '@mui/material';

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }) => ({
  '& .MuiDrawer-root': {
    position: 'absolute',
    top: '65px',
    minWidth: '250px',
    height: isMobile ? 'calc(100vh - 56px)' : 'calc(100vh - 65px)',
  },
  '& .MuiPaper-root': {
    position: 'absolute',
    top: isMobile ? '56px' : 0,
    minWidth: '250px',
    height: isMobile ? 'calc(100vh - 56px)' : 'calc(100vh - 65px)',
    // overflow: 'hidden',
  },
}));

export const StyledSidebarMainList = styled(List)(() => ({
  bgcolor: 'background.paper',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',
  alignItems: 'center',
  flexDirection: 'column',
}));
