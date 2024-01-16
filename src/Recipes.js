import { useEffect, useState } from "react";
import './App.css';
import RecipeComponent from "./RecipeComponent";

function Recipes() {
    const MY_ID='19095fe0';
    const MY_KEY='8565295f98b9dc7d362db00df244194e';

    const [mySearch, setMySearch] = useState("");
    const [myRecipe, setMyRecipe] = useState([]);
    const [wordSubmitted, setWordSubmitted] = useState("argula");


    useEffect(() => {
        const getRecipe = async () => {
            const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
            const sDat = await response.json();
            setMyRecipe(sDat.hits);
        }
        getRecipe()
    }, [wordSubmitted])

    const myRecipeSearch = (e) => {
        setMySearch(e.target.value)
    }
    
    const finalSearch = (e) => {
        e.preventDefault()
        setWordSubmitted(mySearch)
    }

    return (
        <div className="Recipe">
            <div className="Recipe-box">
            <div className="Recipe_container">
                <img className="Recipe_container-img" src="https://images.unsplash.com/photo-1592201426550-83c4be24a0a7?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="food"></img>
                <h2 className="Recipe-header">Find a Recipe</h2>
            </div>
            <div className="Recipe_container">
                <form onSubmit={finalSearch}>
                    <input className="Recipe_container-search"
                    onChange={myRecipeSearch}
                    value={mySearch}/>
                </form>
            </div>
            <div className="Recipe_container">
                <button onClick={finalSearch} className="Recipe_container-button">
                    <p className="button-search">search</p>
                </button>
            </div>

            {myRecipe.map((element, index) =>(
                <RecipeComponent key={index}
                label={element.recipe.label}
                image={element.recipe.image}
                calories={element.recipe.calories}
                ingredients={element.recipe.ingredientLines} />
            ))}
            </div>
        </div>
    )
}

export default Recipes;