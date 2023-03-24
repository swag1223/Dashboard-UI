import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography, useMediaQuery, useTheme, Divider } from '@mui/material';

import CardItem from '@components/CardItem';
import { requestCustomersData } from '@store/customers';

import {
  StyledCommonListItem,
  StyledCommonList,
  StyledLatestCustomerContainer,
} from './style';

const LatestCustomers = () => {
  // HOOKS
  const { customersData } = useSelector((state) => state.customersData);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    dispatch(requestCustomersData());
  }, []);

  return (
    <StyledLatestCustomerContainer isMobile={isMobile}>
      <Typography variant='h4'>Latest Customers</Typography>
      <StyledCommonList disablePadding>
        {customersData.map((customer) => {
          return (
            <Fragment key={customer.id}>
              <StyledCommonListItem disablePadding>
                <CardItem
                  avatar={customer.avatar}
                  name={customer.name}
                  title={customer.name}
                  subtitle={customer.email}
                />

                <Typography variant='h4' color='text.primary'>
                  ${customer.amount}
                </Typography>
              </StyledCommonListItem>
              {customer.id !== customersData.length ? <Divider /> : null}
            </Fragment>
          );
        })}
      </StyledCommonList>
    </StyledLatestCustomerContainer>
  );
};

export default LatestCustomers;
