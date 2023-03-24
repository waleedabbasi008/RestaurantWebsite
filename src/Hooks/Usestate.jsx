import React, {useState} from 'react'
import './Hooks.scss';
import UsestateApi from './UsestateApi';
const Usestate = () => {
const [data, setdata] = useState(UsestateApi);
const clear = ()=>{
  if(data === UsestateApi){

    setdata([ ]);
  }else{
    setdata(UsestateApi);
  }
}
  return (
    <>
  <section>
      <div className="container" >
      {data.map((currele)=>{
            const {id, name, age} = currele;
        return (
          <>

          <div className="text"  key={id}>
               <h1>Id is: {id} Name: {name} & age is: {age} </h1>
          </div>
          </>
        )
      })}
              <button className=' btn btn-outline-secondary d-block' onClick={clear}> Click me plzz </button>
      </div>
      </section>
  
    </>
  )
}

export default Usestate;