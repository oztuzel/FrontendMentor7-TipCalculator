import React, { Fragment } from 'react';
import style from './Input.module.css';


  
function Input ({img, onChange, clas}) {

  // if people count is zero, clas == false and (style.false) is activated.
  let clases = ` ${style.input} ${style[clas]}`;

  return (
    
    <Fragment>
      <input 
        className= {clases}
        type='number' 
        placeholder='0'
        onChange={onChange}
        
      /> 
      <img src={img} alt={img} className={style.img} />
      
    </Fragment>
  )
}

export default Input
