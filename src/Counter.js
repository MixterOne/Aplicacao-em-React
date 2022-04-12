import React, { useState, useEffect } from 'react'
import './Counter.css'

function Counter() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
      
    } , [])

    const handleOnClick = operador => {
        const novoValor = operador === '+' 
        ? contador + 1
        : contador - 1
        setContador(novoValor);
    }

  return(
    <div className='Counter'>
        <span>{contador}</span>
        <button onClick={() => handleOnClick('+')}>+</button>
        <button onClick={() => handleOnClick('-')}>-</button>
    </div>
  )
}

export default Counter;
