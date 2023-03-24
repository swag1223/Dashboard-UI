import { ListItemButton, styled } from '@mui/material';

const StyledCollapseListItemButton = styled(ListItemButton)(
  ({
    theme: {
      typography: { pxToRem },
      spacing,
    },
  }) => ({
    borderRadius: pxToRem(12),
    padding: spacing(1, 11),
  })
);

export default StyledCollapseListItemButton;