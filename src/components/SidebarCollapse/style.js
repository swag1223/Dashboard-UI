import { ListItemButton, styled } from '@mui/material';

const StyledCollapseListItemButton = styled(ListItemButton)(
  ({
    theme: {
      typography: { pxToRem },
    },
  }) => ({
    borderRadius: pxToRem(12),
    padding: `${pxToRem(4)} ${pxToRem(45)}`,
    minWidth: pxToRem(225),
  })
);

export default StyledCollapseListItemButton;
