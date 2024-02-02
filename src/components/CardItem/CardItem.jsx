import PropTypes from 'prop-types';

import {
  Avatar,
  Box,
  ListItemText,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';

import { StyledCardItemAvatar } from './style';

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
          <Tooltip title={title} placement='top' arrow>
            <Typography
              variant='h4'
              color='text.primary'
              sx={{ ...theme.mixins.ellipsis() }}>
              {title}
            </Typography>
          </Tooltip>
        }
        secondary={
          <Tooltip title={subtitle} placement='top' arrow>
            <Typography
              variant='body3'
              color='text.secondary'
              sx={{
                ...theme.mixins.ellipsis(),
              }}>
              {subtitle}
            </Typography>
          </Tooltip>
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
