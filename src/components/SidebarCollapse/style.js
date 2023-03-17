import { ListItemButton, styled } from '@mui/material';

import CONSTANTS from '@constants/index';

const StyledCollapseListItemButton = styled(ListItemButton)(
  ({
    theme: {
      typography: { pxToRem },
      spacing,
    },
  }) => ({
    borderRadius: pxToRem(12),
    padding: spacing(1, 11),
    width: pxToRem(CONSTANTS.SIDEBAR_LIST_ITEM_WIDTH),
  })
);

export default StyledCollapseListItemButton;
