import Footer from '../Footer/Footer';

import { decrementCounter, incrementCounter } from '@store/counter/actions';
import { useDispatch, useSelector } from 'react-redux';

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
    <>
      <h1>Main Overview</h1>
      <button type='button' onClick={handleIncrement}>
        +
      </button>
      <span>{count}</span>
      <button type='button' onClick={handleDecrement}>
        -
      </button>
      <Footer />
    </>
  );
};

export default MainContent;
