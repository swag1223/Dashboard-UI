import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import CardItem from '@components/CardItem';
import {
  StyledCommonList,
  StyledCommonListItem,
} from '@containers/LatestCustomers/style';
import { requestTopProductsData } from '@store/topProducts';
import StyledTopProductsContainer from './style';

const TopProducts = () => {
  // HOOKS
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { topProductsData } = useSelector((state) => state.topProductsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTopProductsData());
  }, []);

  return (
    <StyledTopProductsContainer isMobile={isMobile}>
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
                <Box display='flex' gap='5px'>
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
