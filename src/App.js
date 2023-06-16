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
  //let list=["delhi"];
  //c1:stateful variable
  let [list, setList] = useState(["Delhi"]);

  //c2:Action Member Function
  let addItemAction = () => {
    //creating the clone of list and adding the mumbai in it
    let newlist = [...list, "Mumbai"];

    console.log(newlist);

    //DOM :: TRIGGER DOM
    setList(newlist);
  };

  return (
    <>
      {/**C3 : Event Binding */}
      <input type="button" value="Add New Item" onClick={addItemAction} />
      {list.map((item) => (
        <h1>Hello {item}</h1>
      ))}
    </>
  );
}

export default App;
