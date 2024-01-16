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
    <div>
        <MyMenu 
        menuPlans={menuPlans} 
        addMeal={addMeal} 
        deleteDay={deleteDay}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}/>
        <MenuAndIngredients
        selectedDay={getActiveMenu()}
        updatedDay={updatedDay}
        />
    </div>
    );
    }

export default WeeklyMenu;