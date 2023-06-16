function App() {
  return (
    <>
      <h1>Props Demo</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let data = "Hello Universe";
  let list = ["delhi", "Mumbai", "Chennai"];

  return (
    <>
      <h1>Data</h1>

      {/**Version 3 */}
      {list.map((item) => (
        <>
          <h1>Hello World</h1>
        </>
      ))}

      {/**version 2.2*/}
      {list.map((item) => (
        <h1>Hello {item}</h1>
      ))}

      {/** version 2.1 */}
      {list.map((item) => "Hello" + item)}

      {/**version 1 */}
      {list.map((item) => item)}
    </>
  );
}

export default App;
