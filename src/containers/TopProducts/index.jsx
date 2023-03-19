import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { requestTopProductsData } from '@store/topProducts';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TopProducts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { shadows } = theme;

  const { topProductsData } = useSelector((state) => state.topProductsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTopProductsData());
  }, []);

  console.log(topProductsData);

  return (
    <Box
      sx={{
        borderRadius: '16px',
        bgcolor: 'background.paper',
        // maxHeight: '500px',

        padding: isMobile ? '16px' : '24px',
        // width: isMobile ? '100%' : '380px',
        width: '100%',
        boxShadow: shadows[1],
      }}>
      <Typography variant='h4'>Top Products</Typography>
      <List
        // className='custom-scrollbar'
        sx={{
          overflowY: 'auto',
          //   maxHeight: '432px',
          //   borderRadius: '16px',
          //   bgcolor: 'background.paper',
          //   padding: isMobile ? '10px' : '20px',
          // width: isMobile ? '100%' : '380px',
          //   width: '100%',
          //   boxShadow: shadows[1],
        }}
        // sx={{ border: '1px solid black' }}
      >
        {/* <ListSubheader>
        <Typography variant='h4' color='text.primary'>
          Top Products
        </Typography>
      </ListSubheader> */}
        {topProductsData.map((product) => {
          return (
            <Fragment key={product.id}>
              <ListItem
                sx={{
                  //   border: '1px solid yellow',
                  display: 'flex',
                  justifyContent: 'space-between',
                  //   gap: '80px',
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    //  border: '1px solid green'
                  }}>
                  {/* {product.avatar && (
                    <ListItemAvatar
                      sx={{
                        //   border: '1px solid black',
                        display: 'flex',
                        //   justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Avatar alt={product.name} src={product.avatar} />
                    </ListItemAvatar>
                  )} */}
                  <ListItemText
                    primary={
                      <Typography
                        variant='h4'
                        color='text.primary'
                        // sx={{ border: '1px solid blue' }}
                      >
                        {product.label}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        //   sx={{ display: 'inline' }}
                        // sx={{ border: '1px solid red' }}
                        variant='body2'
                        //   component='span'
                        color='text.secondary'>
                        {product.description}
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
                      {`${product.sales}sales`}
                    </Typography>
                  }
                />
              </ListItem>
              {product.id !== topProductsData.length ? <Divider /> : null}
            </Fragment>
          );
        })}
      </List>
    </Box>
  );
};

export default TopProducts;
