const MenuAndIngredients = ({selectedDay, updatedDay}) => {
    
    const editMyMenu = (myInput, value) => {
        updatedDay({
            ...selectedDay, 
            [myInput]: value
        })
    }

    if (!selectedDay) return <p className="ask">Plan your weekly menu</p>

    return (
        <div className="container-menuPlans">
        <div className="Menu_container">
            <div className="container_enter">
                <input
                type="text"
                className="myInput"
                placeholder="today is..."
                id="title"
                value={selectedDay.title}
                onChange={(e) => editMyMenu("title", e.target.value)}
                />

                <textarea
                placeholder="Write your meal plan here"
                id="menuForADay"
                value={selectedDay.menuForADay}
                onChange={(e) => editMyMenu("menuForADay", e.target.value)}

                />

                <textarea
                placeholder="Write ingredients here"
                id="menuForADay"
                value={selectedDay.ingredients}
                onChange={(e) => editMyMenu("ingredients", e.target.value)}
                />
            </div>
        </div>
        </div>
    )
}

export default MenuAndIngredients;