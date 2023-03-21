import React, { useEffect } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { requestCustomersData } from '@store/customers';
import CustomList from '@components/CustomList';

const LatestCustomers = () => {
  const transformCustomerInfo = (customer) => {
    return {
      id: customer.id,
      title: customer.name,
      subtitle: customer.email,
      avatar: customer.avatar,
      amount: (
        <Typography variant='h4'>
          $
          <Typography variant='h4' component='span'>
            {customer.amount}
          </Typography>
        </Typography>
      ),
    };
  };

  const { customersData } = useSelector((state) => state.customersData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCustomersData());
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { shadows } = theme;

  const transformedCustomersData = customersData.map((customer) => {
    return transformCustomerInfo(customer);
  });

  return (
    <Box
      sx={{
        borderRadius: '16px',
        bgcolor: 'background.paper',
        padding: isMobile ? '16px' : '24px',
        width: isMobile ? '100%' : '35%',
        boxShadow: shadows[1],
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
      <Typography variant='h4'>Latest Customers</Typography>
      <CustomList data={transformedCustomersData} />
    </Box>
  );
};

export default LatestCustomers;
