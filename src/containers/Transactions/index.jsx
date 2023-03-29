import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import { FONT_WEIGHTS } from '@constants/theme';
import StatusChip from '@components/StatusChip';
import CustomTable from '@components/CustomTable';
import { requestTransactionsData } from '@store/transactions';
import { dateFormatter } from '@utils/index';
import StyledTransactionsContainer from './style';

const Transactions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { transactionsData } = useSelector((state) => state.transactionsData);
  const dispatch = useDispatch();

  const {
    typography: { pxToRem },
  } = theme;

  useEffect(() => {
    dispatch(requestTransactionsData());
  }, []);

  /**
   * An object that maps the transaction types to their corresponding strings.
   */
  const transactionTypeConfig = {
    receive: 'Payment from ',
    processing: 'Payment from ',
    failed: 'Payment failed from ',
    refund: 'Payment refund to ',
  };

  /**
   * An object that maps the transaction statuses to their corresponding label and color.
   */
  const transactionStatusConfig = {
    completed: {
      label: 'Completed',
      color: 'success',
    },
    'in progress': {
      label: 'In Progress',
      color: 'info',
    },
    cancelled: {
      label: 'Cancelled',
      color: 'error',
    },
  };

  /**
   * Transforms the row data for transaction table.
   */
  const transformTransactionsRowData = (row) => {
    return {
      transaction: (
        <Typography
          variant='body2'
          component='p'
          noWrap={!!isMobile}
          sx={{
            ...theme.mixins.ellipsis(),
            maxWidth: isMobile ? 'unset' : pxToRem(300),
          }}>
          {transactionTypeConfig[row.transactionType]}
          <Typography
            variant='body2'
            component='span'
            fontWeight={FONT_WEIGHTS.SEMIBOLD}>
            {row.name}
          </Typography>
        </Typography>
      ),

      dateTime: (
        <Typography variant='body2' color='text.secondary' noWrap>
          {dateFormatter(row.dateTime)}
        </Typography>
      ),

      amount: (
        <Typography variant='body2' fontWeight={FONT_WEIGHTS.SEMIBOLD} noWrap>
          {row.transactionType === 'refund' ? `-${row.amount}` : row.amount}
        </Typography>
      ),

      status: (
        <StatusChip
          label={transactionStatusConfig[row.status].label}
          color={transactionStatusConfig[row.status].color}
        />
      ),
    };
  };

  /** keys of the columnNames to remove in mobile  */
  const keysToRemove = ['amount', 'status'];

  const updatedHeaders = (transactionsData.headers || []).filter(
    (header) => !(isMobile && keysToRemove.includes(header.key))
  );

  /**
   *Maps the table rows to transformed data objects.
   *returns An array of transformed data objects for transaction table rows.
   */
  const tableRowsFinalData = (transactionsData.tableRows || []).map((row) => {
    return transformTransactionsRowData(row);
  });

  const updatedRows = tableRowsFinalData.map((row) =>
    Object.keys(row)
      .filter((key) => !(isMobile && keysToRemove.includes(key)))
      .map((key) => row[key])
  );

  return (
    <StyledTransactionsContainer>
      <Box>
        <Typography variant='h4'>Transactions</Typography>
        <Typography
          variant='body3'
          color='text.secondary'
          sx={{ ...theme.mixins.ellipsis() }}>
          This is a list of latest transactions.
        </Typography>
      </Box>
      <CustomTable headers={updatedHeaders} rowsData={updatedRows} />
    </StyledTransactionsContainer>
  );
};

export default Transactions;
