import { useRef } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

let inputRef = useRef();
let dispatch = useDispatch();
let storeObj = useSelector((store)=>{
  return store;
})

  return (
    <div className="App">
      <input ref={inputRef}></input>

      <button onClick={()=>{
 dispatch({type:"addActors",data:inputRef.current.value});
      }}>Actors</button>

<button onClick={()=>{
 dispatch({type:"addCricketers",data:inputRef.current.value});
      }}>Cricketers</button>

<button onClick={()=>{
 dispatch({type:"addPoliticians",data:inputRef.current.value});
      }}>Politicians</button>

      <hr></hr>
      <h1>Actors:{storeObj.actors}</h1>
      <h1>Cricketers:{storeObj.cricketers.join()}</h1>
      <h1>Politicians:{storeObj.politicians.join()}</h1>


    </div>
  );
}

export default App;
