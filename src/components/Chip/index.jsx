import { Chip } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const StatusChip = ({ label, color }) => {
  return <Chip label={label} color={color} />;
};

StatusChip.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default StatusChip;
