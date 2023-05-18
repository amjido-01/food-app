import "./App.css";
import { Header } from "./component/Layout/Header";
import { Meals } from "./component/Meals/Meals";
import { Cart } from "./component/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
