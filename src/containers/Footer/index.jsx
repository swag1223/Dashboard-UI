import FontIcon from '@components/styledComponents/FontIcon';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { common } from '@mui/material/colors';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    palette: {
      common: { GRAY },
    },
  } = theme;
  return (
    <Box
      padding={8}
      sx={{
        backgroundColor: common.white,
        borderRadius: '16px',
        minHeight: '112px',
        gap: '20px',
      }}
      display='flex'
      justifyContent='space-between'
      alignItems={isMobile ? 'flex-start' : 'center'}
      flexDirection={isMobile ? 'column' : 'row'}>
      <Typography variant='body1' color='text.secondary'>
        © 2021 Themesberg, LLC. All rights reserved.
      </Typography>
      <Box display='flex' justifyContent='space-between' sx={{ gap: '20px' }}>
        <FontIcon className='icon-github' fontcolor={GRAY[900]} fontSize={20} />
        <FontIcon
          className='icon-twitter'
          fontcolor={GRAY[900]}
          fontSize={20}
        />
        <FontIcon
          className='icon-facebook-f'
          fontcolor={GRAY[900]}
          fontSize={20}
        />
        <FontIcon
          className='icon-dribble'
          fontcolor={GRAY[900]}
          fontSize={20}
        />
      </Box>
    </Box>
  );
};

export default Footer;
