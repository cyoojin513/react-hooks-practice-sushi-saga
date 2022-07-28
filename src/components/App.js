import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then((items) => setSushis(items))
  }, [])

  const [firstObj, setfirstObj] = useState(0)
  const [lastObj, setlastObj] = useState(4)

  function handlePage() {
    setfirstObj(firstObj + 5)
    setlastObj(lastObj + 5)
  }

  const displayedSushis = sushis.slice(firstObj, lastObj)
  
  return (
    <div className="app">
      <SushiContainer
        sushis={displayedSushis}
        handlePage={handlePage}
      />
      <Table />
    </div>
  );
}

export default App;
