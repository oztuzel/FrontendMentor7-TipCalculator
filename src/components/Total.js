import React from 'react';
import style from './Total.module.css';

function Total({giveValue, reset}) {
  
  

  // giveValue.billValue == input bill alue
  // giveValue.peopleValue === input number of people
  // giveValue.clickedButtonValue === clicked button percentage
  let total = '00.00' ;
  let tip = '00.00' ;
  if(giveValue !== undefined){
    let bill = Number(giveValue.billValue.valueOf());
    let people = Number(giveValue.peopleValue.valueOf());
    let percentage = Number(giveValue.clickedButtonValue.valueOf());
    let totalNumber = (bill + (bill*percentage/100))/people ;
    let tipAmount = (bill*percentage/100)/people; 
    total = totalNumber.toFixed(2);
    tip = tipAmount.toFixed(2);

  }  

  const resetClickHandler = () => {
    reset();
  }
  
  return (
    <div className={style.container}>
      <div className={style.tip}>
        <p className={style.tipPassage}>Tip amount </p> 
        <span> / {' '} person </span>
      </div>
      <p className={style.dolar}> ${tip}</p>
      <div className={style.total}>
        <p className={style.totalPassage}>Total </p> 
        <span>/ {' '} person </span>
      </div>
      <p className={style.totalDolar}> ${total} </p>
      <button value={'reset'} className={style.resetButton} onClick={resetClickHandler}> RESET </button>
    </div>
  )
}

export default Total