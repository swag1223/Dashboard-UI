import { Box, MenuItem, styled } from '@mui/material';

export const StyledNavbarMenuItem = styled(MenuItem)(() => ({
  display: 'flex',
  gap: 2,
}));

export const StyledNavbarMenuContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));
