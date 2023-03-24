const initialState = 10;
const changeNumber = (state = initialState, action)=>{
   switch(action.type){
       case "increment": return state+1; 
       case "decrement": return state-1; 
   }
}
export default changeNumber;