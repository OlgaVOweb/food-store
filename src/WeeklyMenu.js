import { useEffect, useState } from 'react';
import './App.css';
import MenuAndIngredients from './MenuAndIngredients';
import MyMenu from './MyMenu';
import uuid from 'react-uuid';

function WeeklyMenu() {

    const [menuPlans, setMenuPlans] = useState(
        localStorage.menuPlans ? JSON.parse(localStorage.menuPlans) : [])
    const [selectedDay, setSelectedDay] = useState(false);

    useEffect(() => {
        localStorage.setItem("menuPlans", JSON.stringify(menuPlans))
    }, [menuPlans])
  
    const addMeal = () => {
        const newMenu = {
            title: "Today is ...",
            id: uuid(),
            menuForADay: "",
            ingredients: ""
        }
        setMenuPlans([newMenu, ...menuPlans])
    }

    const deleteDay = (menuId) => {
        setMenuPlans(menuPlans.filter(({id}) => id !== menuId)) 
    }

    const updatedDay = (myUpdatedMenu) => {
        const updatedMenu = menuPlans.map((menuPlan) => {
            if (menuPlan.id === myUpdatedMenu.id) {
                return myUpdatedMenu;
            }
            return menuPlan;
        })
        setMenuPlans(updatedMenu)
    }

    const getActiveMenu = () => {
        return menuPlans.find(({id}) => id === selectedDay)
    }
        return (
        <div className="cont-weeklyPlan">
            <div className="Menu_container">
        <div className="Menu_container-width">
            <h2 className="menu-title">Weekly meal plan</h2>
            <img className="Recipe_container-img" src="https://images.unsplash.com/photo-1544070078-a212eda27b49?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="food"></img>
            <button className="button-add" onClick={addMeal}>ADD</button>
        </div>
        <MenuAndIngredients
        selectedDay={getActiveMenu()}
        updatedDay={updatedDay}
        />
        <MyMenu 
        menuPlans={menuPlans} 
        addMeal={addMeal} 
        deleteDay={deleteDay}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}/>
    </div>
    </div>
    );
    }

export default WeeklyMenu;