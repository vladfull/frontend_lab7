import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import GoodsGallery from './components/shop/GoodsGallery';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <h2>Галерея товарів</h2>
      <GoodsGallery />
    </div>
  );
}

export default App;
