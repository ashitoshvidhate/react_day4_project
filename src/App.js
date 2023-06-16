function App() {
  return (
    <>
      <h1>Props Demo</h1>

      {/**Calling the MessageDemo{1,'abcd'} */}

      <MessageDemo name="Vitthal" />
      <MessageDemo name="Ashitosh" />
      <MessageDemo name="CDAC" />
    </>
  );
}

function MessageDemo(props) {
  //console.log("I am inside messagedemo", props);
  return (
    <>
      <h1>Hello {props.name}</h1>
    </>
  );
}

export default App;
