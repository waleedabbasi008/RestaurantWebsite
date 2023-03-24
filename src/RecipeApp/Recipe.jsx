import React, { useState } from 'react'
import RecipeApi from './RecipeApi';
import RecipeCard from './RecipeCard';
import Navbar from './Navbar';
import './Recipe.scss';
const uniqueList = [...new Set(RecipeApi.map((currele)=>{
    return currele.category;
}))]
const Recipe = () => {
    const [data, setdata] = useState(RecipeApi);
    const [menu, setmenu] = useState(uniqueList);
     const filteritem = (category)=>{
         const updatedItem = RecipeApi.filter((currele)=>{
             return currele.category === category;
         })
         setdata(updatedItem);
     }
     const Allitems = ()=>{
         setdata(RecipeApi);
     } 
  return (
    <>
    <Navbar menu={menu} filteritem = {filteritem} Allitems = {Allitems} />
    <RecipeCard  data = {data}  />
    </>
  )
}

export default Recipe;