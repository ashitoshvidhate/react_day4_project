import { useState } from "react";

function App() {
  return (
    <>
      <h1>Stateful List</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let [list, setList] = useState(["Delhi"]);

  let addItemAction = () => {
    let inputRef = document.querySelector("#id1");
    let inputValue = inputRef.value;

    let newlist = [...list, inputValue];

    setList(newlist);

    inputRef.value = "";
  };

  return (
    <>
      <input type="text" placeholder="Enter user input" id="id1" />
      <input type="button" value="Add New Item" onClick={addItemAction} />

      {list.map((item) => (
        <h1>Hello {item}</h1>
      ))}
    </>
  );
}

export default App;
