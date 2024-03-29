import error404 from '@assets/images/error404.svg';
import ErrorPage from '@components/ErrorPage';

const Error404Page = () => {
  return (
    <ErrorPage
      src={error404}
      heading='Page Not Found'
      description='Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.'
    />
  );
};

export default Error404Page;
