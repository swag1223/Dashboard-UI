import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '@store/counter/actions';
import { Box } from '@mui/material';

import Footer from '../Footer';

const MainContent = () => {
  const { count } = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter(5));
  };

  const handleDecrement = () => {
    dispatch(decrementCounter(2));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Main Overview</h1>
      <button type='button' onClick={handleIncrement}>
        +
      </button>
      <span>{count}</span>
      <button type='button' onClick={handleDecrement}>
        -
      </button>
      <Footer />
    </Box>
  );
};

export default MainContent;
