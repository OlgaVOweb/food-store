const MyMenu = ({menuPlans, deleteDay, selectedDay, setSelectedDay}) => {
    return (
        <div className="container-menuPlans">
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
    )
}

export default MyMenu;