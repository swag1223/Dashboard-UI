import React from 'react';

import customersData from '@mockData/customers.json';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const LatestCustomers = () => {
  // const { customersData } = useSelector((state) => state.customersData);
  // console.log(customersData);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(requestCustomersData());
  // }, []);

  // console.log(customersData);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { shadows } = theme;

  return (
    <Box
      sx={{
        maxHeight: '448px',
        borderRadius: '16px',
        bgcolor: 'background.paper',
        padding: isMobile ? '16px' : '24px',
        // maxWidth: isMobile ? '100%' : '380px',
        boxShadow: shadows[1],
      }}>
      <Typography variant='h4'>Latest Customers</Typography>
      <List
        // disablePadding
        sx={{
          // borderRadius: '16px',
          // bgcolor: 'background.paper',
          // padding: isMobile ? '16px' : '24px',
          // maxWidth: isMobile ? '100%' : '50%',
          // boxShadow: shadows[1],
          // border: '1px solid red',

          overflowY: 'auto',
          height: '100%',
          // maxHeight: '400px',
        }}
        // sx={{ border: '1px solid black' }}
      >
        {/* <ListSubheader>
          <Typography variant='h4' color='text.primary'>
            Latest Customers
          </Typography>
        </ListSubheader> */}
        {customersData.map((customer) => {
          return (
            <>
              <ListItem
                disablePadding
                key={customer.id}
                sx={{
                  // border: '1px solid yellow',
                  display: 'flex',
                  justifyContent: 'space-between',
                  //   gap: '80px',
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    // border: '1px solid green',
                  }}>
                  <ListItemAvatar
                    sx={{
                      //   border: '1px solid black',
                      display: 'flex',
                      //   justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Avatar alt={customer.name} src={customer.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        variant='h4'
                        color='text.primary'
                        // sx={{ border: '1px solid blue' }}
                      >
                        {customer.name}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        //   sx={{ display: 'inline' }}
                        // sx={{ border: '1px solid red' }}
                        variant='body2'
                        //   component='span'
                        color='text.secondary'>
                        {customer.email}
                      </Typography>
                    }
                  />
                </Box>
                <ListItemText
                  sx={{ textAlign: 'right' }}
                  primary={
                    <Typography
                      //   component='span'
                      variant='h4'
                      color='text.primary'
                      //   sx={{ border: '1px solid orange' }}
                    >
                      {`$${customer.amount}`}
                    </Typography>
                  }
                />
              </ListItem>
              {customer.id !== customersData.length ? <Divider /> : null}
            </>
          );
        })}
      </List>
    </Box>
  );
};

export default LatestCustomers;
