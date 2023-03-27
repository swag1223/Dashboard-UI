import { Link } from 'react-router-dom';

import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import PropTypes from 'prop-types';

import { URLS } from '@constants/routes';
import StyledErrorPageContainer from './style';

const ErrorPage = ({ src, heading, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
