import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography, useTheme } from '@mui/material';

import { FONT_WEIGHTS } from '@constants/theme';
import CONSTANTS from '@constants/index';
import StatusChip from '@components/StatusChip';
import CustomTable from '@components/CustomTable';
import { requestTransactionsData } from '@store/transactions';
import { dateFormatter } from '@utils/index';
import useViewportContext from '@hooks/useViewPortContext';

import { StyledTransactionsContainer } from './style';

const Transactions = () => {
  const theme = useTheme();
  const { transactionsData } = useSelector((state) => state.transactionsData);
  const dispatch = useDispatch();
  const { isMobile } = useViewportContext();

  const {
    typography: { pxToRem },
  } = theme;

  const {
    TRANSACTIONS: {
      RECEIVE,
      PROCESSING,
      FAILED,
      REFUND,
      COMPLETED,
      IN_PROGRESS,
      CANCELLED,
      AMOUNT,
      STATUS,
    },
  } = CONSTANTS;

  useEffect(() => {
    dispatch(requestTransactionsData());
  }, []);

  /**
   * An object that maps the transaction types to their corresponding strings.
   */
  const transactionTypeConfig = {
    [RECEIVE]: 'Payment from ',
    [PROCESSING]: 'Payment from ',
    [FAILED]: 'Payment failed from ',
    [REFUND]: 'Payment refund to ',
  };

  /**
   * An object that maps the transaction statuses to their corresponding label and color.
   */
  const transactionStatusConfig = {
    [COMPLETED]: {
      label: 'Completed',
      color: 'success',
    },
    [IN_PROGRESS]: {
      label: 'In Progress',
      color: 'info',
    },
    [CANCELLED]: {
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
          {row.transactionType === REFUND ? `-${row.amount}` : row.amount}
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
  const keysToRemove = [AMOUNT, STATUS];

  const updatedHeaders = (transactionsData.headers || []).filter(
    (header) => !(isMobile && keysToRemove.includes(header.key))
  );

  /**
   * Maps the table rows to transformed data objects.
   * returns An array of transformed data objects for transaction table rows.
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
