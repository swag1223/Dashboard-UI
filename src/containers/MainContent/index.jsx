import Footer from '@containers/Footer';
import Gallery from '@components/Gallery';
import Sales from '@components/Sales';

import StyledMainContentContainer from './style';

const MainContent = () => {
  return (
    <StyledMainContentContainer>
      <Gallery />
      <Sales />
      <Footer />
    </StyledMainContentContainer>
  );
};

export default MainContent;
