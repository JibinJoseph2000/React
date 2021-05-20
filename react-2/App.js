import {useState} from 'react'
import Counter from './components/Counter';
import Employee from './components/Employee'

function App() {
  const [count,setCount] = useState(0);
  const addcount = ()=>{
    setCount(count+1)
    console.log(count);
  }

  let obj = {
    title:'1st Counter',
    count,
    place:'Mannar'
  }

  let emp = [{name:'Jibin Joseph',age:21},
  {name:'Lauren German',age:28},
  {name:'Tom Ellis',age:32}
]
  return (
    <div>
      <button onClick={addcount}>Add</button>
      <Counter {...obj}/>
      <Counter title='2nd Counter' count={count}/>
      {
        emp.map((obj,index)=>{
          return(
            //<Employee key={index} name={obj.name} age={obj.age}/>
            <Employee key={index} {...obj}/>
          )

        })
      }
    </div>
  );
}

export default App;