import React from 'react'

function Buttons({getButtonValue, calculation}) {
    
    return (
        <div className='calc_buttons'>
            <button className='button' onClick={()=>getButtonValue(7)}>7</button>
            <button className='button' onClick={()=>getButtonValue(8)}>8</button>
            <button className='button' onClick={()=>getButtonValue(9)}>9</button>
            <button className='button del' onClick={()=>calculation('DEL')}>DEL</button>
            <button className='button' onClick={()=>getButtonValue(4)}>4</button>
            <button className='button' onClick={()=>getButtonValue(5)}>5</button>
            <button className='button' onClick={()=>getButtonValue(6)}>6</button>
            <button className='button' onClick={()=>getButtonValue("+")}>+</button>
            <button className='button' onClick={()=>getButtonValue(1)}>1</button>
            <button className='button' onClick={()=>getButtonValue(2)}>2</button>
            <button className='button' onClick={()=>getButtonValue(3)}>3</button>
            <button className='button' onClick={()=>getButtonValue("-")}>-</button>
            <button className='button' onClick={()=>getButtonValue(".")}>.</button>
            <button className='button' onClick={()=>getButtonValue(0)}>0</button>
            <button className='button' onClick={()=>getButtonValue("/")}>/</button>
            <button className='button' onClick={()=>getButtonValue("*")}>x</button>
            <button className='button big_button_one' onClick={()=>calculation("RESET")} >RESET</button>
            <button className='button big_button_two' onClick={()=>calculation("=")} >=</button>
        </div>
    )
}

export default Buttons
