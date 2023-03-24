import React, { useState } from 'react'
import './Org.scss';
import OrgApi from "../Component/OrgApi";
import OrgCard from './OrgCard';
import Navbar from './Navbar';
const uniqueList = [...new Set(OrgApi.map((currele) => {      //we are going to make the unique name we dont need repeated names we need new Set to create unique items
  return currele.name;
})), "All"]   //Unique values me aik aur value All k naam se daal di
console.log(uniqueList);
const Org = () => {
  const [orgdata, setorgdata] = useState(OrgApi);
  const [menuList, setmenuList] = useState(uniqueList);  //Hum ne menuList k andar uniqueList ko pass kar diaa q k humain unique valus ki zaroorat hai
  const filterItem = (category) => {
    if (category === "All") {   //agar cate-gory All hui 
      setorgdata(OrgApi);   // to orgdata ki updated value me OrgApi ko daal do
      return;
    }
    const updatedList = OrgApi.filter((currele) => {
      {/* Hum ne OrgApi ko filter kiaa aur return me dekhaa k filter kiay huay elements me jo name hai wo === hona chahiye us category k jo hum ne FilterItem method k andar likhi hui hai  */ }
      return currele.name === category;
    })
    setorgdata(updatedList); {/*  updated list me wo items hain jo hum ne filter kiay huay hain matlab abhi sirf basic it wali categoty print hogi */ }
  }

  return (
    <>
      <Navbar filteritem={filterItem} menuList={menuList} />
      <OrgCard orgdata={orgdata} />       {/*org is passed from here to other components*/}
    </>
  )
}

export default Org;