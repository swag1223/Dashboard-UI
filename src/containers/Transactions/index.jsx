import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import { FONT_WEIGHTS } from '@constants/theme';
import StatusChip from '@components/Chip';
import CustomTable from '@components/CustomTable';
import { requestTransactionsData } from '@store/transactions';
import { dateFormatter } from '@utils/index';
import StyledTransactionsContainer from './style';

const Transactions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { transactionsData } = useSelector((state) => state.transactionsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTransactionsData());
  }, []);

  const transactionTypeConfig = {
    receive: 'Payment from ',
    processing: 'Payment from ',
    failed: 'Payment failed from ',
    refund: 'Payment refund to ',
  };

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

  const transformTransactionsRowData = (row) => {
    return {
      transaction: (
        <Typography variant='body3' sx={{ ...theme.mixins.ellipsis() }}>
          {transactionTypeConfig[row.transactionType]}
          <Typography variant='span' fontWeight={FONT_WEIGHTS.SEMIBOLD}>
            {row.name}
          </Typography>
        </Typography>
      ),

      dateTime: (
        <Typography variant='body3'>{dateFormatter(row.dateTime)}</Typography>
      ),

      amount: (
        <Typography variant='body3' fontWeight={FONT_WEIGHTS.SEMIBOLD}>
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

  const tableRowsFinalData = (transactionsData.tableRows || []).map((row) => {
    return transformTransactionsRowData(row);
  });

  const keysToRemove = ['amount', 'status'];

  return (
    <StyledTransactionsContainer>
      <Box>
        <Typography variant='h4'>Transactions</Typography>
        <Typography variant='body2' color='text.secondary'>
          This is a list of latest transactions.
        </Typography>
      </Box>
      <CustomTable
        headers={transactionsData.headers}
        rowsData={tableRowsFinalData}
        isMobile={isMobile}
        keysToRemove={keysToRemove}
      />
    </StyledTransactionsContainer>
  );
};

export default Transactions;
