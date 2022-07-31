import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  sushis, handlePage, handleEat}) {
  
  return (
    <div className="belt">
      {sushis.map((item) => 
        <Sushi 
          key={item.id}
          sushi={item}
          handleEat={handleEat}
        />
      )}
      <MoreButton handlePage={handlePage}/>
    </div>
  );
}

export default SushiContainer;
