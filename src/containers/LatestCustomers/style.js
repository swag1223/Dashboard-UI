import { Box, List, ListItem, styled } from '@mui/material';

const StyledLatestCustomerContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isTablet',
})(
  ({
    theme: {
      spacing,
      shape,
      shadows,
      palette: {
        common: { white },
      },
      typography: { pxToRem },
    },
    isTablet,
  }) => ({
    padding: isTablet ? spacing(4) : spacing(10, 5),
    width: isTablet ? '100%' : '30%',
    backgroundColor: white,
    display: 'flex',
    flexDirection: 'column',
    gap: pxToRem(20),
    borderRadius: shape.borderRadius,
    boxShadow: shadows[1],
  })
);

const StyledCommonList = styled(List)(
  ({
    theme: {
      typography: { pxToRem },
    },
  }) => ({
    maxHeight: pxToRem(370),
    overflowY: 'auto',
  })
);

const StyledCommonListItem = styled(ListItem)(
  ({
    theme: {
      typography: { pxToRem },
    },
  }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: pxToRem(20),
  })
);

export {
  StyledLatestCustomerContainer,
  StyledCommonList,
  StyledCommonListItem,
};
