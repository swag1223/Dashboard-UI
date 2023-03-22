import Footer from '@containers/Footer';
import Gallery from '@components/Gallery';
import StyledMainContentContainer from './style';

const MainContent = () => {
  return (
    <StyledMainContentContainer>
      <Gallery />
      <Footer />
    </StyledMainContentContainer>
  );
};

export default MainContent;
