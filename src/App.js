
import { useState } from 'react';
import './App.css';
import { data } from './data';
function App() {
  const[queindex,setQueIndex]=useState(0);
  const [result,setResult]=useState(0);
  const currQues= data[queindex];
  const[score,setScore]=useState(false)

 const optionValidation=(i)=>{
console.log(i)
if(currQues.correct_answer=== i)
{ setResult(result+1)
 }
 const nextques=queindex+1;
 if(nextques<data.length)
 {
 setQueIndex(queindex+1)
}
else{
 setScore(true);
}
 }
  return (
    <div className="container">
      {
        score ?<div className='score'>
          <br/><h1>Score :{result}</h1></div>:(
          <div className='ques'>
          <p>{currQues.question}</p>
          <div className='opt'>
            <ul>
              {currQues.answers.map((e,i)=>{
                return  <li onClick={()=>optionValidation(i)} >{e}</li> ;
              })}
              
            </ul>
          </div>
        </div>
        )
      }
     
      
    </div>
  );
}

export default App;
