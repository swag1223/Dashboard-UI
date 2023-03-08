import { Menu, TextField, styled } from '@mui/material';

export const StyledTextField = styled(TextField)(({ theme }) => ({
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

export const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 8,
    marginTop: theme.spacing(1),
    minWidth: 200,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  },
}));
