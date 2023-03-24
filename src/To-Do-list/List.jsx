import React, { useState, useEffect } from 'react';
import './List.scss';
import { FaPlus, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
// get the local storage data 

// const getLocalData =()=>{
//   const lists = localStorage.getItem("mytodolist");    //commented due to the localStorage is not working
//   if(lists){
//     return JSON.parse(lists);
//   } else{
//     return [];
//   }


// }
const List = () => {
const [inputData, setinputData] = useState();
const [items, setItems] = useState([]);  //Local storage is not working you should passed the function getLocalDta() inside this usestate ehennever the local storage will be recover
const[EditItem, setEditItem] = useState(" ");
const [toggleButton, settoggleButton] = useState(false);
// add the item function
const addItem = ()=>{
 if(!inputData){
   alert("please fill the data");
 }
 else if(inputData && toggleButton){
   setItems(
     items.map((currele)=>{
      if(currele.id === EditItem){
        return {...currele, name: inputData}
      }
      else{
        return currele;
      }
     })
   )
 }
 else{
   //the old data must be removed from the input element whenever we click on add button
   const myNewInputData = { //use for the unique for every element 
     id:new Date().getTime().toString(),  //we need the unique id with the passage of time
     name:inputData,                  
   }
   setItems([...items, myNewInputData])
   setinputData("");   //by clicking on plus you are getting the previous data to avoid this we wrote this line 

 }
}




// ########################################## how to delete item section ########################
const deleteItem = (index)=>{   //index is the parametr of the argument passed inside the trash button
const updatedItem = items.filter((currele)=>{   //we need to filter the items
return currele.id !== index;   //we Compare the id and index we will return the unmatched items 
});
setItems(updatedItem);
}

// ########################## Edited items ################################
const editItem = (index)=>{
   const item_todo_edited = items.find((currele)=>{
     return currele.id === index;
   })  
   setinputData(item_todo_edited.name)
   setEditItem(index)    //index is the currele.id
   settoggleButton(true);
}


// ######################### Remove all the elements ########################
const removeAll = ()=>{
  setItems([]);
}
// ################################# Adding To the Local storage #############################

// useEffect(() => {
//   localStorage.setItems("mytodolist", JSON.stringify(items));   //this is not working try later 
// }, [items]);

  return (
    <>



      <div className="main-div" >
        <div className="child-div">
          <figure>
            <img src="./images/Todo-logo.jpg" alt="todo logo" />
            <figcaption className=' caption-top' style={{ color: "#fff", marginLeft:"35px" }}> Add your list here ✌</figcaption>
          </figure>
          <div className="addItems ">
            <input type="text" 
             value={ inputData } onChange = { (e)=>{ setinputData(e.target.value) } }
             placeholder='   ✍ Add items' className=' w-100 ' />
              {toggleButton ?  <span className='icon' onClick={addItem}  > < FaRegEdit />  </span>  : <span className='icon' onClick={addItem} > <FaPlus />  </span> }    {/* //If toggle button will be true then Edit icon will be shown else Plus icon will be shown  */}
            


          </div>



          {/* Show our Items */}
          {
            items.map((currele)=>{
              return(
              
             <div className="show-items" key={currele.id}>
            <div className="each-item">
              <h3> {currele.name} </h3>
              <div className="todo-btn">
              <span className='icon'  onClick={ ()=>editItem(currele.id)} > <FaRegEdit />  </span> 
              <span className='icon'  onClick={()=>{deleteItem(currele.id)}} > <FaRegTrashAlt />  </span> 
              </div>
              </div>
            
              </div>
      
        
          
              )
           
            })
          }

          {/* Remove All Items */}
          <div className="show-items">
            <button onClick={removeAll} className="btn mt-5 btn-outline-info" data-sm-link-text="Remove all"> <span> Remove All </span> </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default List;