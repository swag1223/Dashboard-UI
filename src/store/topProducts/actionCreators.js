import { LOAD_TOP_PRODUCTS_DATA } from '@constants/actionTypes';
import TopProducts from '@mockData/products.json';

const requestTopProductsData = () => {
  return {
    type: LOAD_TOP_PRODUCTS_DATA,
    payload: TopProducts,
  };
};

export default requestTopProductsData;
