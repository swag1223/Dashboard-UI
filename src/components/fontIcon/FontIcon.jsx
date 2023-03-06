import { Box, styled } from '@mui/material';

const FontIcon = styled(Box)(({ theme, size, fontcolor }) => ({
  fontSize: theme.typography.pxToRem(size),
  color: theme.palette.secondary[fontcolor]
}));

export default FontIcon;
