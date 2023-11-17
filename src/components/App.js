import { useState } from "react";
import Logo from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  function handleDeleteItm(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirm = window.confirm(
      "Are you Sure you want to delete all the things from the list"
    );
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItm}
        onToggleItem={handleToggleItem}
        onClickClear={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
export function Item({ item, onDeleteItem, onToggleItem }) {
  console.log(item.packed);

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : null}>
        {/* {`${item.quantity}`} &nbsp;
        {` ${item.description}`} */}
        {item.quantity}&nbsp;
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>✖</button>
    </li>
  );
}

export default App;
