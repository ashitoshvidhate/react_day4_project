import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>Stateful List</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  //adding data using useref
  let inputRef = useRef();
  let [list, setList] = useState(["Delhi"]);

  let addItemAction = () => {
    let inputValue = inputRef.current.value;

    let newlist = [inputValue, ...list];

    setList(newlist);

    inputRef.current.value = "";
  };

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter user input"
        id="id1"
      />
      <input type="button" value="Add New Item" onClick={addItemAction} />

      {list.map((item) => (
        <h1>Hello {item}</h1>
      ))}
    </>
  );
}

export default App;
