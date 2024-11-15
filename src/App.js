import './App.css';
import { useEffect } from 'react';
import { getBearer } from './Spotify';

function App() {
  
  useEffect(() => {

  getBearer().then((data) => {
    console.log(data);
  })
  
}, []);


  return (
    <div className="App">
      <h1 className="App-header">Welcome to Spotify Stats!</h1>
    
    </div>
  );
}


export default App;
