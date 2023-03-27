import { Avatar, Box, ListItemText, Typography, useTheme } from '@mui/material';

import PropTypes from 'prop-types';

import StyledCardItemAvatar from './style';

const CardItem = (props) => {
  const { avatar, name, title, subtitle } = props;
  const theme = useTheme();

  return (
    <Box display='flex'>
      {avatar && (
        <StyledCardItemAvatar>
          <Avatar alt={name} src={avatar} />
        </StyledCardItemAvatar>
      )}
      <ListItemText
        primary={
          <Typography
            variant='h4'
            color='text.primary'
            sx={{ ...theme.mixins.ellipsis() }}>
            {title}
          </Typography>
        }
        secondary={
          <Typography
            variant='body3'
            color='text.secondary'
            sx={{
              ...theme.mixins.ellipsis(),
            }}>
            {subtitle}
          </Typography>
        }
      />
    </Box>
  );
};

CardItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

CardItem.defaultProps = {
  title: '',
  subtitle: '',
  avatar: '',
  name: '',
};

export default CardItem;
