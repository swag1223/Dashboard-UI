import { Box, styled } from '@mui/material';

const FontIcon = styled(Box)(
  ({ theme, size, fontcolor, padding = '0', shadow = '0' }) => ({
    fontSize: theme.typography.pxToRem(size),
    color: theme.palette.secondary[fontcolor],
    boxShadow: theme.shadows[shadow],
    borderRadius: '50%',
    padding: theme.typography.pxToRem(padding)
  })
);

export default FontIcon;
