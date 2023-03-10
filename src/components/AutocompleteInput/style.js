import { styled, TextField } from '@mui/material';

const StyledTextField = styled(TextField)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },

  '& .MuiInputBase-root': {
    width: theme.typography.pxToRem(402),
    boxShadow: theme.shadows[2],
    padding: `${theme.typography.pxToRem(5)} ${theme.typography.pxToRem(15)}}`,
  },
}));

export default StyledTextField;
