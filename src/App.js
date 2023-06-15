import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    if (cartIsShown === true)
      setCartIsShown(false)
    else {
      setCartIsShown(true)
    }
  }


  return (
    <Fragment>
      {cartIsShown&&<Cart show={showCartHandler} />}
      <Header showCart = {showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
