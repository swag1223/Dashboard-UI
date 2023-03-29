import { Link } from 'react-router-dom';

import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import FontIcon from '@components/styledComponents/FontIcon';
import StyledFooterContainer from './style';

const Footer = () => {
  const footerIconsConfig = [
    {
      iconName: 'github',
      to: 'https://github.com/',
    },
    {
      iconName: 'twitter',
      to: 'https://twitter.com/',
    },
    {
      iconName: 'facebook-f',
      to: 'https://www.facebook.com/',
    },
    {
      iconName: 'dribble',
      to: 'https://dribbble.com/',
    },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    palette: {
      common: { GRAY },
    },
  } = theme;
  return (
    <StyledFooterContainer isMobile={isMobile}>
      <Typography variant='body1' color='text.secondary'>
        © 2021 Themesberg, LLC. All rights reserved.
      </Typography>
      <Box display='flex' justifyContent='space-between'>
        {footerIconsConfig.map((icon) => {
          return (
            <IconButton
              component={Link}
              to={icon.to}
              key={icon.iconName}
              target='_blank'>
              <FontIcon
                className={`icon-${icon.iconName}`}
                fontcolor={GRAY[900]}
                fontSize={22}
              />
            </IconButton>
          );
        })}
      </Box>
    </StyledFooterContainer>
  );
};

export default Footer;
