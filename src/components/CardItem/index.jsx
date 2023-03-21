import {
  Avatar,
  Box,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import ellipsis from '@theme/mixins';

const CardItem = ({ dataItem }) => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}>
      {dataItem.avatar && (
        <ListItemAvatar
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <Avatar alt={dataItem.name} src={dataItem.avatar} />
        </ListItemAvatar>
      )}
      <ListItemText
        primary={
          <Typography variant='h4' color='text.primary' sx={{ ...ellipsis() }}>
            {dataItem.title}
          </Typography>
        }
        secondary={
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ ...ellipsis() }}>
            {dataItem.subtitle}
          </Typography>
        }
      />
    </Box>
  );
};

CardItem.propTypes = {
  dataItem: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};

CardItem.defaultProps = {
  dataItem: {},
};
export default CardItem;
