import { useState } from "react"
import "./App.css";
import { Header } from "./component/Layout/Header";
import { Meals } from "./component/Meals/Meals";
import { Cart } from "./component/Cart/Cart";
import { CartProvider } from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hiddeCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart  onHideCart={hiddeCartHandler}/>}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
