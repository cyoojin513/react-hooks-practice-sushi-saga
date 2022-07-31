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

  const [index, setIndex] = useState(0)

  function handlePage() {
    setIndex((sushiIndex) => (sushiIndex + 4) % sushis.length)
    // to wrap back around to the beginning of the array once we get to the end
    // using the remainder (%) operator
  }

  const displayedSushis = sushis.slice(index, index + 4)

  const [eaten, setEaten] = useState([])
  const [price, setPrice] = useState(50)

  function handleEat(eatenSushi, sushiPrice) {
    if (price > sushiPrice) {
      setEaten([...eaten, eatenSushi])
      setPrice(price - sushiPrice)
    } else {return alert("Need more money")}
  }

  return (
    <div className="app">
      <SushiContainer
        sushis={displayedSushis}
        handlePage={handlePage}
        handleEat={handleEat}
      />
      <Table
        plates={eaten}
        remainMoney={price}
      />
    </div>
  );
}

export default App;
