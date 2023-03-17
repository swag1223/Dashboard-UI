import CONSTANTS from '@constants/index';
import { Drawer, styled } from '@mui/material';

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(
  ({
    theme: {
      typography: { pxToRem },
      palette: {
        common: { GRAY },
      },
    },
    isMobile,
  }) => ({
    '& .MuiPaper-root': {
      '&::-webkit-scrollbar': {
        width: pxToRem(CONSTANTS.SIDEBAR_SCROLLBAR_WIDTH),
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: GRAY[10],
      },
      scrollbarGutter: 'stable',
      position: 'sticky',
      top: isMobile
        ? pxToRem(CONSTANTS.NAVBAR_HEIGHT_MOBILE)
        : pxToRem(CONSTANTS.NAVBAR_HEIGHT_DESKTOP),
      height: isMobile
        ? `calc(100vh - ${pxToRem(CONSTANTS.NAVBAR_HEIGHT_MOBILE)})`
        : `calc(100vh - ${pxToRem(CONSTANTS.NAVBAR_HEIGHT_DESKTOP)})`,
      width: pxToRem(CONSTANTS.SIDEBAR_WIDTH),
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
);

export default StyledDrawer;
