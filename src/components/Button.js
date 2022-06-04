import React from 'react';
import style from './Button.module.css';

function Button({value, onClick,name}) {
  return (
    <button 
      className={style.button} 
      onClick={onClick}
      value={value}
    >  
      {name} 
    </button>
  )
}

export default Button