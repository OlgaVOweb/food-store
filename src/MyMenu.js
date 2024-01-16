const MyMenu = ({menuPlans, addMeal, deleteDay, selectedDay, setSelectedDay}) => {
    return (
        <div className="container-menuPlans">
        <div  className="Menu_container">
            <div className="Menu_container-width">
                <h2 className="menu-title">Weekly meal plan</h2>
                <img className="Recipe_container-img" src="https://images.unsplash.com/photo-1544070078-a212eda27b49?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="food"></img>
                <button className="button-add" onClick={addMeal}>Add</button>
            </div>
            <div>
                {menuPlans.map(({id, title, menuForADay}) => (
                    <div className={`menu ${id === selectedDay ? "selected" : "default"}`}
                    onClick={() => setSelectedDay(id)}
                    >
                        <p className="Day">{title}</p>
                        <p className="Menu">{menuForADay.substring(0, 60)}</p>
                        <button className="button-del" onClick={() => deleteDay(id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default MyMenu;