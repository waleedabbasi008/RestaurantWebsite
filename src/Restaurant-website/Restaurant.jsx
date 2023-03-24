import React, { useState } from 'react';
import "./restaurant.scss";
import MenuApi from '../Component/MenuApi';
import RestaurantCard from './RestaurantCard';
import Navbar from './Navbar';
const UniqueList = [ ...new Set( MenuApi.map((currEle)=>{      //Used for Donot repeat same things 
  return  currEle.category;
  

}))]
console.log(UniqueList);
const Restaurant = () => {
    const [menu, setmenu] = useState(MenuApi);  //useState for the Api created by us
    const [MenuList, setMenuList] = useState(UniqueList);    //usestate for the unique vales used in te buttons for the unique categories
    const filterItem = (category)=>{
       const updatedList = MenuApi.filter((currEle)=>{
         return currEle.category === category;
       });
       setmenu(updatedList);
    }
    const AllItems = ()=>{
      setmenu(MenuApi);
    }
    console.log(menu);
  return (
    <>
 <Navbar filterItem = {filterItem} AllItems = {AllItems} menulist = {MenuList} />
   <RestaurantCard  menu = {menu} />
    </>
  )
}

export default Restaurant;