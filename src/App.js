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
        <div>
          <h1>{item}</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt rem
            quasi modi. Eveniet, voluptates quibusdam vel illum iure aliquid
            similique minus recusandae quas maiores reiciendis voluptatem!
            Libero assumenda cumque atque!
          </p>
          <div>
            <input type="button" value="&#128077;" />
            <input type="button" value="&#128078;" />
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
