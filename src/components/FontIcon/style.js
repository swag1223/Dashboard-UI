import { Box, styled } from '@mui/material';

const FontIcon = styled(Box)(
  ({
    theme,
    size,
    variant = 'secondary',
    fontcolor,
    padding = 0,
    shadow = 0,
  }) => {
    return {
      fontSize: theme.typography.pxToRem(size),
      boxShadow: theme.shadows[shadow],
      borderRadius: '50%',
      padding: theme.typography.pxToRem(padding),
      color:
        variant === 'primary'
          ? theme.palette.primary.main
          : theme.palette.secondary[fontcolor],
    };
  }
);

export default FontIcon;
