import { ListItemButton, styled } from '@mui/material';

const StyledSidebarListItem = styled(ListItemButton)(({ theme }) => {
  const { pxToRem } = theme.typography;
  return {
    borderRadius: pxToRem(12),
    padding: `${pxToRem(4)} ${pxToRem(8)}`,
    minWidth: pxToRem(225),
    display: 'flex',
    gap: pxToRem(18),
  };
});
export default StyledSidebarListItem;
