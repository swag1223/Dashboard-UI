import { ListItemButton, ListItemText, styled } from '@mui/material';

export const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ theme, isActive }) => ({
  color: isActive ? theme.palette.primary.main : theme.palette.secondary.dark,
}));

export const StyledSidebarListItemButton = styled(ListItemButton)(
  ({ theme }) => {
    const { pxToRem } = theme.typography;
    return {
      borderRadius: pxToRem(12),
      padding: `${pxToRem(4)} ${pxToRem(8)}`,
      minWidth: pxToRem(225),
      display: 'flex',
      gap: pxToRem(18),
    };
  }
);
