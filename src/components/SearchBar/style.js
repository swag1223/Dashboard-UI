import { styled, TextField } from '@mui/material';

const StyledTextField = styled(TextField)(
  ({
    theme: {
      typography: { pxToRem },
      breakpoints,
      palette: { secondary },
      shadows,
    },
  }) => ({
    display: 'none',
    [breakpoints.up('sm')]: {
      display: 'block',
    },

    '& .MuiInputBase-root': {
      backgroundColor: secondary.extralight,
      width: pxToRem(402),
      boxShadow: shadows[2],
      padding: `${pxToRem(5)} ${pxToRem(15)}}`,
    },
  })
);

export default StyledTextField;
