import {
  styled,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
} from '@mui/material';

import CONSTANTS from '@constants/index';

const StyledTableContainer = styled(TableContainer)(
  ({
    theme: {
      typography: { pxToRem },
    },
  }) => ({
    maxWidth: pxToRem(CONSTANTS.TABLE_MAXWIDTH),
    maxHeight: pxToRem(CONSTANTS.TABLE_MAXHEIGHT),
  })
);

const StyledTableCell = styled(TableCell)(
  ({
    theme: {
      spacing,
      palette: {
        common: { GRAY },
      },
    },
  }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: GRAY[50],
    },
    [`&.${tableCellClasses.body}`]: {
      border: 'none',
      padding: spacing(3),
    },
  })
);

const StyledTableRow = styled(TableRow)(
  ({
    theme: {
      palette: {
        common: { GRAY },
      },
    },
  }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: GRAY[50],
    },
  })
);

export { StyledTableContainer, StyledTableCell, StyledTableRow };
