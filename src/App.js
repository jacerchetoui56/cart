import "./styles/main.css"
import { useGlobalContext } from "./Context"
import Product from "./Product";

function App() {
  const { products } = useGlobalContext();
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="title">Shopping Cart</div>
          <div className="remove-all-btn">Remove All</div>
        </header>
        <div className="products">
          {
            products.map(product => {
              return <Product key={product.id} {...product} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
