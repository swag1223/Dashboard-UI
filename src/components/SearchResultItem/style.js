import { styled, Box } from '@mui/material';

const StyledSearchResultItem = styled(Box)(
  ({
    theme: {
      typography: { pxToRem },
    },
  }) => ({
    padding: `${pxToRem(4)} ${pxToRem(16)}`,
    width: '100%',
    // border: '1px solid red',
    display: 'flex',
    justifyContent: 'space-between !important',
  })
);

export default StyledSearchResultItem;
