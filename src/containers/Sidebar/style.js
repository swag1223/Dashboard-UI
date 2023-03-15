import CONSTANTS from '@constants/index';
import { Drawer, styled } from '@mui/material';

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(
  ({
    theme: {
      typography: { pxToRem },
    },
    isMobile,
  }) => ({
    '& .MuiPaper-root': {
      position: 'sticky',
      top: isMobile
        ? pxToRem(CONSTANTS.NAVBAR_HEIGHT_MOBILE)
        : pxToRem(CONSTANTS.NAVBAR_HEIGHT_DESKTOP),
      width: pxToRem(250),
      height: isMobile
        ? `calc(100vh - ${pxToRem(CONSTANTS.NAVBAR_HEIGHT_MOBILE)})`
        : `calc(100vh - ${pxToRem(CONSTANTS.NAVBAR_HEIGHT_DESKTOP)})`,
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
);

export default StyledDrawer;
