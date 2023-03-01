import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '@/redux/counter/actions';
import Footer from './Footer';

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
