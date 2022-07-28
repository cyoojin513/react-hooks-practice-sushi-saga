import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, handlePage, handleEat, value}) {
  console.log(value)
  return (
    <div className="belt">
      {sushis.map((item) => 
        <Sushi 
          key={item.id}
          sushi={item}
        />
      )}
      <MoreButton handlePage={handlePage}/>
    </div>
  );
}

export default SushiContainer;
