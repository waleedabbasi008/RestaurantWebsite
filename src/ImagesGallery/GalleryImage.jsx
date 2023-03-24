import React, { useState } from 'react';
// import './index.scss';
import MenuLink from './MenuLink';
import MenuItems from './MenuItems';
import Category from './Category';
const AllCatvalues = [...new Set(MenuLink.map((currele)=>{ return currele.category;})), "all"]  //for the unique values
console.log(AllCatvalues);
const GalleryImage = () => {

    const[items, setitems] = useState(MenuLink);  //state for the MenuLinks.jsx file
    const [catItems, setcatItems] = useState(AllCatvalues);   // state for unique values
    const filterItem = (categ)=>{

    if(categ ==="all"){
        setitems(MenuLink);
    }
        const updatedItem = MenuLink.filter((currEle)=>{
            return currEle.category = categ;
        });
        setitems(updatedItem);

    }
    console.log(filterItem);
  return (
    <>
<Category const filterItem = {filterItem}  category = {catItems} />
    {/ dcdc* My mAIN iTEM sECTION */}
   <MenuItems const items = {items} />
    </>
  )
}
export default GalleryImage;