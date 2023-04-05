import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Box, Button, Typography, useTheme } from '@mui/material';

import { URLS } from '@constants/routes';
import useViewportContext from '@hooks/useViewPortContext';

import { StyledErrorPageContainer } from './style';

const ErrorPage = ({ src, heading, description }) => {
  const theme = useTheme();
  const { isMobile } = useViewportContext();

  const {
    typography: { pxToRem },
    spacing,
  } = theme;

  return (
    <StyledErrorPageContainer>
      <Box
        display='flex'
        justifyContent='center'
        width={isMobile ? pxToRem(256) : pxToRem(400)}>
        <img src={src} alt={heading} />
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        flexDirection='column'
        alignItems='center'
        sx={{ gap: pxToRem(20) }}>
        <Typography variant='h1' textAlign='center'>
          {heading}
        </Typography>
        <Typography variant='body1' color='text.secondary' textAlign='center'>
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
    </StyledErrorPageContainer>
  );
};

ErrorPage.propTypes = {
  src: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
};

ErrorPage.defaultProps = {
  src: '',
  heading: '',
  description: '',
};

export default ErrorPage;
