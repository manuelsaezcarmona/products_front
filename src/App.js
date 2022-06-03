import './App.css';
import { getProductsBySearch } from './services/api';

async function App() {
  const data = await getProductsBySearch('sin');
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
