import { Chip } from '@mui/material';

import PropTypes from 'prop-types';

const StatusChip = ({ label, color }) => {
  return <Chip label={label} color={color} size='small' />;
};

StatusChip.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default StatusChip;
