import { AppBar, Box, styled } from '@mui/material';

export const NavItemsWrapper = styled(Box)(({ theme, gap }) => ({
  display: 'flex',
  gap: theme.typography.pxToRem(gap),
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderBottom: `1px solid ${theme.palette.secondary.border}`,
}));
