import './index.css';
import Footer from './Components/footer/Footer';
import Connection from './Components/connection/Connection';
import Cooperation from './Components/cooperation/Cooperation';
import Geograpgys from './Components/geograpgys/Geograpgys';
import Header from './Components/header/Header';
import Main from './Components/main/Main';
import News from './Components/news/News';
import Products from './Components/products/Products';
import Works from './Components/works/Works';

function App() {
  return (
    <div>

      <Header/>
      <Products/>
      <Main/>
      <Geograpgys/>
      <Cooperation/>
      <Works/>
      <News/>
      <Connection/>
      <Footer/>
    </div>
  );
}

export default App;
