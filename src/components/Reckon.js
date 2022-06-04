import React,{useState, useEffect} from 'react';
import Input from './Input';
import Button from './Button';
import image from '../images/image';
import style from './Reckon.module.css';

function Reckon({fetchValues, resetValues}) {
  const [isValidPeople, setIsValidPeople] = useState(true);
  const [billValue, setBillValue] = useState(0);
  const [peopleValue, setPeopleValue] = useState(1);
  const [clickedButtonValue, setClickedButtonValue] = useState(0);

  
  const billChangeHandler = (event) => {
    setBillValue(event.target.value);
  }

  const peopleChangeHandler = (event) => {
    if(event.target.value != 0){
      setPeopleValue(event.target.value);
      setIsValidPeople(true);
    }else{
      setIsValidPeople(false)
    }
  }

  const clickButtonHandler = (event) => {
    setClickedButtonValue(event.target.value)
  }

  useEffect(() => {
    setBillValue(0);
    setPeopleValue(1);
    setClickedButtonValue(0);
  },[resetValues])

  let values = {billValue,peopleValue,clickedButtonValue};

  useEffect(() => {
    fetchValues(values); 
  },[values,fetchValues])


  return (
    <div className={style.container}>
      <p className={style.text}> Bill</p>
      <Input 
        img={image.icondollar}
        onChange={billChangeHandler}
        value={billValue}
        />
      <p className={style.p}>Select Tip %</p>
      <div className={style.buttonDiv}>
        <Button name ={'5%'} value={5} onClick={clickButtonHandler} />
        <Button name ={'10%'} value={10} onClick={clickButtonHandler} />
        <Button name ={'15%'} value={15} onClick={clickButtonHandler} />
        <Button name ={'25%'} value={25} onClick={clickButtonHandler} />
        <Button name ={'50%'} value={50} onClick={clickButtonHandler} />
        <input className={style.input} placeholder="Custom" type="number" onChange={clickButtonHandler}/>
      </div>
      <p className={style.p}>Number of People</p>
      {!isValidPeople && <p className={style.error}>Can't be zero</p>}
      <Input 
        img={image.iconperson} 
        onChange={peopleChangeHandler}
        value={peopleValue}
        clas={isValidPeople}
      />
    </div>
  )
}

export default Reckon