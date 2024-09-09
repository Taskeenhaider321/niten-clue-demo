import Navbar from './assets/components/Navbar/Navbar';
import './App.css';
import Header from './assets/components/Header/Header';
import CardsGroup from './assets/components/CardsGroup/CardsGroup';
import Verba from './assets/components/Verba/Verba';



function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <CardsGroup />
        <Verba />
    </div>
  );
}

export default App;
