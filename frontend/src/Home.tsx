import DiscoverPanel from './DiscoverPanel';
import Navbar from './NavBar';
import './styles/Home.css'


function Home() {
  
  return (
    <>
      <div className = "background">
        <Navbar />
        <DiscoverPanel />
        
      </div>
    </>
  );
}

export default Home;