import './App.css';
import { addProduct } from './services/api';

async function App() {
  const data = await addProduct(
    'loco',
    'algo loco',
    'http://algoloco.hpegs',
    false,
    12.99,
    'buhardilla'
  );
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
