import { Fragment, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Divider, Typography, useTheme } from '@mui/material';

import CardItem from '@components/CardItem';
import {
  StyledCommonList,
  StyledCommonListItem,
} from '@containers/LatestCustomers/style';
import IsMobileContext from '@context/index';
import { requestTopProductsData } from '@store/topProducts';

import StyledTopProductsContainer from './style';

const TopProducts = () => {
  // HOOKS
  const theme = useTheme();
  const value = useContext(IsMobileContext);

  const { topProductsData } = useSelector((state) => state.topProductsData);
  const dispatch = useDispatch();

  const { isTablet } = value;
  const {
    typography: { pxToRem },
  } = theme;

  useEffect(() => {
    dispatch(requestTopProductsData());
  }, []);

  return (
    <StyledTopProductsContainer
      isTablet={isTablet}
      className='custom-scrollbar custom-scrollbar-color'>
      <Typography variant='h4'>Top Products</Typography>
      <StyledCommonList disablePadding>
        {topProductsData.map((product) => {
          return (
            <Fragment key={product.id}>
              <StyledCommonListItem disablePadding>
                <CardItem
                  title={product.label}
                  subtitle={product.description}
                />
                <Box display='flex' gap={pxToRem(5)}>
                  <Typography variant='h4'>{product.sales}</Typography>
                  <Typography variant='body1' color='secondary.main'>
                    sales
                  </Typography>
                </Box>
              </StyledCommonListItem>
              {product.id !== topProductsData.length ? <Divider /> : null}
            </Fragment>
          );
        })}
      </StyledCommonList>
    </StyledTopProductsContainer>
  );
};

export default TopProducts;
