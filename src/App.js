import logo from './logo.svg';
import './App.css';
import productList from "./assets/shop-data.json";
import Filteredlist from "./components/FilteredList";

function App() {
  return (
    <div className="App">
      <Filteredlist list={productList} />
    </div>
  );
}

export default App;
