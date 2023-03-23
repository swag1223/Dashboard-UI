import ErrorPage from '@components/ErrorPage';
import error500 from '@assets/images/error500.png';

const Error404Page = () => {
  return (
    <ErrorPage
      src={error500}
      heading='Something has gone seriously wrong'
      description='It’s always time for a coffee break We should be back by the time you finish your coffee.'
    />
  );
};

export default Error404Page;
