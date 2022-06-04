import React,{useEffect, useState} from 'react';
import style from './App.module.css';
import Reckon from './components/Reckon';
import Total from './components/Total';




function App() {
  const [isReset,setIsReset] = useState(true);
  const [value, setValue] = useState();
  
  function fetchingValue(value) {
    setValue(value)
  }

  const resetting = () => {
    if(isReset === false){
      setIsReset(true)
    }else{
      setIsReset(false)
    }
  }

  useEffect(()=>{
    fetchingValue(value);
  },[value])
  
  return (
    <div className={style.app}>
        <p className={style.p}> SPLI <br/> TTER</p>
        <div className={style.calculator}>
          <Reckon fetchValues={fetchingValue} resetValues={isReset}/>
          <div className={style.total}>
            <Total giveValue={value} reset={resetting} />
          </div>
        </div>
    </div>
  );
}

export default App;
