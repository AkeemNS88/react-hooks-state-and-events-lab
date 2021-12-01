import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  let [ isDark, setIsDark ] = useState(false);
  let [ items, setItems] = useState(itemData);

  function toggle() {
    setIsDark((isDark) => !isDark);
  }
  const appClass = isDark ? "App dark" : "App light"

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggle}>{ isDark ? "Dark Mode" : "Light Mode" } </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
