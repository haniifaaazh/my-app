import React from 'react';
import CardList from "./components/CardList";
import getAllProducts from "./services/getAllProducts";

function App() {
  const products = getAllProducts();
  return (
    <div className="App">
      <h1>Product List</h1>
      <CardList products={products} />
    </div>
  );
}

export default App;
