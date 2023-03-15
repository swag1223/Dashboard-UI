import { Box, MenuItem, styled } from '@mui/material';

export const StyledNavbarMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  gap: theme.typography.pxToRem(10),
}));

export const StyledNavbarMenuContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));
