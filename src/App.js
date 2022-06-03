import './App.css';
import { getAllProducts } from './services/api';

async function App() {
  const data = await getAllProducts();
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Search</h1>
      </header>
      <div />
    </div>
  );
}

export default App;
