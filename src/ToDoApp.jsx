import React, { useState } from 'react';
import Todo from '../src/images/Todo-logo.jpg';
import './index.scss';
import { AiOutlinePlus, AiFillEdit } from "react-icons/ai";
import { FaTrash} from "react-icons/fa";
const ToDoApp = () => {
    const [inputData, setinputData] = useState('');
    const [Items, setItems] = useState([]);
    const [toggle, settoggle] = useState(true);
    const[editItems, seteditItems] = useState(null);
    const addItem = ()=>{
        if(!inputData){

            alert('Please fill the data');
        }
        else if(!inputData){
            
        }
        else{
            const allInputData = {id: new Date().getTime().toString(), name:inputData}
     setItems([...Items, allInputData]);
     setinputData('');
    }
}
const deleteItem = (index)=>{
const updatedItem = Items.filter((currele)=>{
    return index !== currele.id;
})
setItems(updatedItem);
}
// How to work with edit button

const editItem = (id)=>{
    let newEditedItems = Items.find((elem)=>{
        return elem.id === id;
    })

    console.log(newEditedItems);
    settoggle(false);
    setinputData(newEditedItems.name);
    seteditItems(id);
}

    
  return (
    <>
    <div className="main-div">
        <div className="child-div text-center">
            <figure className='text-center' >
                <img src={Todo} alt="" className='' /> 
                <figcaption> Add your list here </figcaption>
            </figure>
            <div className="add-items">
                <input type="text" placeholder='Add items'
                value={inputData}
                onChange = {(e)=>{
                    setinputData(e.target.value);

                }}
                 />
                 {
                     toggle ?     <button title='Add items' onClick={addItem}> <AiOutlinePlus /> </button> :
                     <h3 > <button title='Edit items' > <AiFillEdit /> </button> </h3>
                 }
            
            </div>
            <div className="show-items">
            {
                Items.map((elem)=>{
                    return(
                        <div className="each-item"  key={elem.id} >
                        <div className="todo-btn">
                    <h3 className='text-left' > {elem.name} <button onClick={()=> deleteItem(elem.id)} >  <FaTrash /> </button> </h3>
                    <h3 className='text-left' > <button onClick={()=> editItem(elem.id)} >  <AiFillEdit /> </button> </h3>
                    </div>
                </div>
                    )
                })
            }
               
            </div>
            <div className="showItems">
                <button className="btn effect04" data-sm-link-text = "Remove All" > <span> Check List </span> </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ToDoApp