import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import StatusChip from '@components/Chip';
import { FONT_WEIGHTS } from '@constants/theme';
import ellipsis from '@theme/mixins';
import TableComp from '@components/TableComp';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { requestTransactionsData } from '@store/transactions';
import StyledTransactionsContainer from './style';

const dateFormatter = (data) => {
  const datetime = new Date(data);
  const date = datetime.getDate().toString().padStart(2, '0');
  const month = datetime.toLocaleString('default', { month: 'short' });
  const year = datetime.getFullYear();

  return `${month} ${date},${year}`;
};

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
        <Typography variant='body3' sx={{ ...ellipsis() }}>
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
      <TableComp
        headers={transactionsData.headers}
        rowsData={tableRowsFinalData}
        isMobile={isMobile}
        keysToRemove={keysToRemove}
      />
    </StyledTransactionsContainer>
  );
};

export default Transactions;
