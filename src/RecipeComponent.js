function RecipeComponent({label, image, calories, ingredients}) {
    return (
        <div className="Recipe_container-API">
            <div className="container-API">
                <h2 className="label">{label}</h2>
            </div>
            <div className="container-API">
                <img src={image} alt="pic"/>
            </div>
            <ul className="container-API list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        -
                        {ingredient}</li>
                ))}
            </ul>
            <div className="container-API">
                <p className="calories">{calories.toFixed()} calories</p>
            </div>

            
        </div>
    )
}

export default RecipeComponent;