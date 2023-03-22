import { List, ListItem, styled } from '@mui/material';

export const StyledLatestCustomerContainer = styled(List, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
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
    isMobile,
  }) => ({
    padding: isMobile ? spacing(4) : spacing(6),
    width: isMobile ? '100%' : '35%',
    backgroundColor: white,
    display: 'flex',
    flexDirection: 'column',
    gap: pxToRem(20),
    borderRadius: shape.borderRadius,
    boxShadow: shadows[1],
  })
);

export const StyledCommonList = styled(List)(() => ({
  maxHeight: '370px',
  overflowY: 'auto',
}));

export const StyledCommonListItem = styled(ListItem)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
}));
