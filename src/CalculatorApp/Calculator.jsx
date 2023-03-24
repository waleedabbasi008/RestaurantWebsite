import React, { useReducer, useState } from 'react';
import './Calculator.scss';
const Calculator = () => {
    const [result, setresult] = useState("");
    const handleclick = (event)=>{
  setresult(result.concat(event.target.name));
    }
    const clear = ()=>{
       setresult(" ");
    }
    const backspace = ()=>{
     setresult(result.slice(0, result.length-1));
    }
    const calculate = ()=>{
        try{
            setresult(eval(result).toString());
        } catch(error){
            setresult("Error")
        }
    }
  return (
    <>
    <h1 className=' accordion-header' > Calculator </h1>
    <div className="container">
        <form>

            <input type="text" value={result} />
        </form>
        <div className="keypad">
            <button className='highlight' id='clear' onClick={clear}>Clear</button>
            <button className='highlight' id='backspace' onClick={backspace}>C</button>
            <button className='highlight' name='/' onClick={handleclick}>Divide</button>
            <button  name='7' onClick={handleclick}>7</button>
            <button name='8' onClick={handleclick}>
                8
            </button>
            <button name='9' onClick={handleclick}>9</button>
            <button className='highlight' name='*' onClick={handleclick}>&times;</button>
            <button name='4' onClick={handleclick}>4</button>
            <button name='5' onClick={handleclick}>5</button>
            <button name='6' onClick={handleclick}>6</button>
            <button className='highlight' name='-' onClick={handleclick}>&ndash;</button>
            <button name='1' onClick={handleclick}>1</button>
            <button name='2' onClick={handleclick}>2</button>
            <button name='3' onClick={handleclick}>3</button>
            <button className='highlight' name='+' onClick={handleclick}>+</button>
            <button name='0' onClick={handleclick}>0</button>
            <button className='highlight' name='.' onClick={handleclick}>.</button>
            <button className='highlight' name='=' onClick={calculate} id = "result">=</button>
        </div>
    </div>
    </>
  )
}

export default Calculator