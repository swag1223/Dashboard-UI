import { decrementCounter, incrementCounter } from '@store/counter/actions';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../footer/Footer';

function MainContent() {
  const count = useSelector((state) => {
    return state.count;
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
      <button type="button" onClick={handleIncrement}>
        +
      </button>
      <span>{count}</span>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
      <Footer />
    </>
  );
}

export default MainContent;
