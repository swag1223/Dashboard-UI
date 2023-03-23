import { Link } from 'react-router-dom';

import { Box, Button, Typography, useTheme } from '@mui/material';

import { URLS } from '@constants/routes';

const ErrorPage = ({ src, heading, description }) => {
  //   console.log(src);
  const theme = useTheme();
  const {
    palette: {
      common: { GRAY },
    },
    spacing,
  } = theme;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: GRAY[50],
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: spacing(8, 20),
        gap: '50px',
      }}>
      <img
        src={src}
        alt='404'
        width='450px'
        // style={{ border: '1px solid red' }}
      />
      <Box
        display='flex'
        justifyContent='center'
        flexDirection='column'
        alignItems='center'
        sx={{ gap: '20px' }}>
        <Typography variant='h1'>{heading}</Typography>
        <Typography variant='body1' color='text.secondary'>
          {description}
        </Typography>
        <Button
          variant='contained'
          component={Link}
          to={URLS.DASHBOARD}
          sx={{ padding: spacing(2, 4) }}>
          Go To Home
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
