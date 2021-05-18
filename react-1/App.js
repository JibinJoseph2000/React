import './App.css';
import Header from './components/Header';

function App() {
  const data = 'next description';
  const value = 'Jibin Joseph';
  const values = 'Jithin Joseph';
  return (
    <div>
      <Header value={value} />
      <h1 style={{color:'yellow',backgroundColor:'blue',textAlign:'center'}}>Hello World</h1>
      <p> This is a sample description. </p>
      <p>This is a {data} </p>
      <h2 className='hello'>New Heading</h2>
      <br></br>
      <Hello/>
      <Hello/>

    </div>
  );
}

export default App;

function Hello(){
  return(
    <h3 className='hello'>New Heading 2</h3>
    );
}
