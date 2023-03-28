import { ListItemButton, ListItemText, styled } from '@mui/material';

export const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(
  ({
    theme: {
      palette: { primary, secondary },
      mixins: { ellipsis },
    },
    isActive,
  }) => ({
    color: isActive ? primary.main : secondary.dark,
    '& .MuiListItemText-primary': {
      ...ellipsis(),
    },
  })
);

export const StyledSidebarListItemButton = styled(ListItemButton)(
  ({
    theme: {
      typography: { pxToRem },
      spacing,
    },
  }) => {
    return {
      borderRadius: pxToRem(12),
      display: 'flex',
      gap: pxToRem(18),
      margin: spacing(1, 2),
      padding: spacing(0.5, 2),
    };
  }
);
