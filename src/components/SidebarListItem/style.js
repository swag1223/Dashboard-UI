import { ListItemButton, ListItemText, styled } from '@mui/material';

export const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(
  ({
    theme: {
      palette: { primary, secondary },
    },
    isActive,
  }) => ({
    color: isActive ? primary.main : secondary.dark,
    '& .MuiListItemText-primary': {
      overflow: 'hidden ',
      textOverflow: 'ellipsis ',
      display: '-webkit-box ',
      WebkitLineClamp: '1',
      WebkitBoxOrient: 'vertical',
    },
  })
);

export const StyledSidebarListItemButton = styled(ListItemButton)(
  ({
    theme: {
      typography: { pxToRem },
    },
  }) => {
    return {
      borderRadius: pxToRem(12),
      display: 'flex',
      gap: pxToRem(18),
      margin: `${pxToRem(5)} ${pxToRem(16)}`,
      padding: `${pxToRem(2)} ${pxToRem(8)}`,
    };
  }
);
