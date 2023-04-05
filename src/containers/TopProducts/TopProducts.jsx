import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Divider, Typography, useTheme } from '@mui/material';

import { requestTopProductsData } from '@store/topProducts';
import useViewportContext from '@hooks/useViewPortContext';
import {
  StyledCommonList,
  StyledCommonListItem,
} from '@containers/LatestCustomers';
import CardItem from '@components/CardItem';

import { StyledTopProductsContainer } from './style';

const TopProducts = () => {
  // HOOKS
  const theme = useTheme();
  const { isTablet } = useViewportContext();

  const { topProductsData } = useSelector((state) => state.topProductsData);
  const dispatch = useDispatch();

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
