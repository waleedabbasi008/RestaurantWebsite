import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Contact = ()=>{
    const [data,setdata] = useState({
        FullName:"",
        Phone:"",
        Email:"",
        message:"",
    }) 
    const inputEvent = (e)=>{
        const{name,value} = e.target;
        setdata((preVal) =>{
            return {
            ...preVal, [name]: value,
        }
            
        })
        

    }
    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`here is your name: ${data.FullName} adn here is your mobile ${data.Phone}`)

    }
return (
    <>
     
       <div className="my-5">
            <h1 className="text-center" > Contact Us </h1>

           </div>
           <div className="container contact-div">
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                   <form onSubmit={formSubmit} >
  <div class="form-group">
    <label for="exampleFormControlInput1">Enter your full name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" name="FullName" value={data.FullName} onChange = {inputEvent} placeholder="Enter name" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Ente your phone number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" name="Phone" value={data.Phone} onChange = {inputEvent} placeholder="Enter your phone number" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="Email" value={data.message} onChange = {inputEvent} placeholder="name@example.com" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange = "inputvent" ></textarea>
  </div>
  <input type="submit" className="btn-secondary bg-dark text-light my-3 btn" style={{borderRadius:"15px"}} />
  <NavLink to = "/Home"  className = "btn-secondary bg-dark text-light my-3 btn "  > Go to home  </NavLink>

</form>
                   </div>
               </div>
           </div>
    
   
           <div className="container-fluid nav-bg ">
    <div className="row ">
        <div className="col-10 mx-auto ">
        <footer class="footer">
        <h3 className="bg-light text-danger text-center ">Resturant-website &copy; all rights reserved</h3>
    </footer>
    <script src="imp.js"></script>
        </div>
    </div>
</div>
    </>
)
}
export default Contact;