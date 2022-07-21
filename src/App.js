import "./styles/main.css"
import { useGlobalContext } from "./Context"
import Product from "./Product";
import { ACTIONS } from "./Context";
import { useEffect, useState } from "react";

function App() {
  const { products, dispatch } = useGlobalContext();
  const [total, setTotal] = useState(0);
  const [numItems, setNumItems] = useState(0);
  useEffect(() => {
    setTotal(products.reduce((acc, cur) => acc + cur.price * cur.amount, 0));
    setNumItems(products.reduce((acc, cur) => acc + cur.amount, 0));
  }, [products])
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="title">Shopping Cart</div>
          <div className="remove-all-btn"
            onClick={() => dispatch({ type: ACTIONS.REMOVE_ALL })}
          >Remove All</div>
        </header>
        {
          numItems === 0 ?
            <div className="empty">No Items in your cart</div>
            :
            <main>
              <div className="products">
                {
                  products.map(product => {
                    return <Product key={product.id} {...product} dispatch={dispatch} />
                  })
                }
              </div>
              <footer>
                <div className="total">
                  <span>Total Price :
                    <div className="total-items">
                      {numItems} {numItems > 1 ? "items" : "item"}
                    </div>
                  </span>
                  <div>
                    ${parseFloat(total).toFixed(2)}
                    {/* toFixed make only two digits appear after the decimals */}
                  </div>
                </div>
              </footer>
            </main>
        }
      </div>
    </div>
  );
}

export default App;
