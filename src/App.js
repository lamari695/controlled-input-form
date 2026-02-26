import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MainP from './main';
import './main.css';
import { Secondform } from './main';

function App() {
  const [currentform, setCurrentForm] = useState(1);
function submit(e){
  e.preventDefault();
  setCurrentForm(true);
}

function previousPage (){

if(setCurrentForm < 1){
setCurrentForm(1)
}
else{
let descrease = setCurrentForm( prev=> 
  prev =prev -1 
)
return descrease
}
}

function nextPage (){

if(setCurrentForm > 2){


setCurrentForm(2)
}else{
let increase = setCurrentForm(prev=>
prev = prev + 1
)
return increase
}
}








return(<div>
{currentform=== 1 && <MainP next ={nextPage} ></MainP>}
{currentform ===2 && <Secondform ></Secondform>}


</div>)

}
export default App;
