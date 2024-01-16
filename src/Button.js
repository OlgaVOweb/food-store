import { data } from "./data";

function Button({filteredFood, setFood}) {
    return(
        <div className="cont">
            <p className="filter">filter</p>
            <button className="change" onClick={() => setFood(data)}>All</button>
            <button className="change" onClick={() => filteredFood("vegetables")}>Vegetables</button>
            <button className="change" onClick={() => filteredFood("fruits")}>Fruits</button>
            <button className="change" onClick={() => filteredFood("meat")}>Meat</button>
            <button className="change" onClick={() => filteredFood("fish")} >Fish</button>
            <button className="change" onClick={() => filteredFood("pasta")} >Pasta</button>
            <button className="change" onClick={() => filteredFood("milkProducts")} >Milk products</button>
            <button className="change" onClick={() => filteredFood("another")}>Another</button>
        </div>
    )
}

export default Button;