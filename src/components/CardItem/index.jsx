import { Avatar, Box, ListItemText, Typography } from '@mui/material';

import PropTypes from 'prop-types';

import ellipsis from '@theme/mixins';
import StyledCardItemAvatar from './style';

const CardItem = (props) => {
  const { avatar, name, title, subtitle } = props;

  return (
    <Box display='flex'>
      {avatar && (
        <StyledCardItemAvatar>
          <Avatar alt={name} src={avatar} />
        </StyledCardItemAvatar>
      )}
      <ListItemText
        primary={
          <Typography variant='h4' color='text.primary' sx={{ ...ellipsis() }}>
            {title}
          </Typography>
        }
        secondary={
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ ...ellipsis() }}>
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
