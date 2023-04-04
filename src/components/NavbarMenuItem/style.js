import { Box, MenuItem, styled } from '@mui/material';

const StyledNavbarMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  gap: theme.typography.pxToRem(10),
}));

const StyledNavbarMenuContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export { StyledNavbarMenuItem, StyledNavbarMenuContent };
