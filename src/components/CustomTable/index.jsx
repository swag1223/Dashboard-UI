/* eslint-disable react/no-array-index-key */
import { FONT_WEIGHTS } from '@constants/theme';
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableCell, StyledTableRow } from './style';

const CustomTable = (props) => {
  const { headers, rowsData, isMobile, keysToRemove } = props;
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ maxWidth: '957px', maxHeight: '455px' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headers
              .filter(
                (header) => !(isMobile && keysToRemove.includes(header.key))
              )
              .map((header) => (
                <StyledTableCell key={header.label}>
                  <Typography
                    variant='body2'
                    fontWeight={FONT_WEIGHTS.SEMIBOLD}>
                    {header.label}
                  </Typography>
                </StyledTableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((row, index) => (
            <StyledTableRow key={index}>
              {Object.keys(row)
                .filter((key) => !(isMobile && keysToRemove.includes(key)))
                .map((key, index) => (
                  <StyledTableCell key={index}>{row[key]}</StyledTableCell>
                ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// PROPTYPES
CustomTable.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  rowsData: PropTypes.arrayOf(
    PropTypes.shape({
      transaction: PropTypes.element,
      dateTime: PropTypes.element,
      amount: PropTypes.element,
      status: PropTypes.element,
    })
  ),
  isMobile: PropTypes.bool,
  keysToRemove: PropTypes.arrayOf(PropTypes.string),
};

CustomTable.defaultProps = {
  headers: [],
  rowsData: {},
  isMobile: false,
  keysToRemove: [],
};

export default CustomTable;
