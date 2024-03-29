import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';

import { FONT_WEIGHTS } from '@constants/theme';

import { StyledTableCell, StyledTableContainer, StyledTableRow } from './style';

const CustomTable = (props) => {
  const { headers, rowsData } = props;

  return (
    <StyledTableContainer
      component={Paper}
      elevation={0}
      className='custom-scrollbar custom-scrollbar-color'>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <StyledTableCell key={header.label}>
                <Typography
                  color='text.secondary'
                  variant='body3'
                  fontWeight={FONT_WEIGHTS.SEMIBOLD}>
                  {header.label}
                </Typography>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((row, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              {Object.keys(row).map((key, cellIndex) => (
                <StyledTableCell key={cellIndex}>{row[key]}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
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
  rowsData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object.isRequired)),
};

CustomTable.defaultProps = {
  headers: [],
  rowsData: [],
};

export default CustomTable;
