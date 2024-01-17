import { useState } from "react";
import { data } from "./data";
import Button from "./Button";
import Food from "./food";
import Footer from "./Footer";
import Search from "./Search";
import ModalWindow from "./ModalWindow";

function Shop() {
    const [food, setFood] = useState(data);
  
    const chosenFood = (searchGroup) => {
      const newFood = data.filter(element => element.searchGroup === searchGroup)
      setFood(newFood);
    }
  
    return (
      <div className="main-container-shop">
        <ModalWindow />
        <div className="container">
          <div className="cont">
            <h2 className="back">Select the products</h2>
          </div>
          
          <Button filteredFood={chosenFood} setFood={setFood}/>
          <Food itemFood={food}/>
        </div>
        <div className="container-footer">
        <Footer />
        </div>
        </div>
    );
}

export default Shop;