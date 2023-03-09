import Footer from '@containers/Footer/Footer';
import Sidebar from '@containers/Sidebar';

function MainContent() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default MainContent;
