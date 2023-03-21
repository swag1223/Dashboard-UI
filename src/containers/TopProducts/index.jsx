import CustomList from '@components/CustomList';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { requestTopProductsData } from '@store/topProducts';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TopProducts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { shadows } = theme;

  const { topProductsData } = useSelector((state) => state.topProductsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTopProductsData());
  }, []);

  const tranformProductInfo = (product) => {
    return {
      id: product.id,
      title: product.label,
      subtitle: product.description,
      amount: (
        <Box sx={{ display: 'flex', gap: '5px' }}>
          <Typography variant='h4'>{product.sales}</Typography>
          <Typography variant='body1' color='secondary.main'>
            sales
          </Typography>
        </Box>
      ),
    };
  };

  const transformedProductsData = topProductsData.map((product) => {
    return tranformProductInfo(product);
  });

  return (
    <Box
      sx={{
        borderRadius: '16px',
        bgcolor: 'background.paper',
        padding: isMobile ? '16px' : '24px',
        width: isMobile ? '100%' : '65%',
        boxShadow: shadows[1],
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
      <Typography variant='h4'>Top Products</Typography>
      <CustomList data={transformedProductsData} />
    </Box>
  );
};

export default TopProducts;
