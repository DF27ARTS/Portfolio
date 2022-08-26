import './App.css';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import Image from './components/Image/Image';
import { useState } from 'react';

function App() {

  const [ state, setState ] = useState(false);

  return (
    <>
      <Image
        state={state}
      />
      <Portfolio
        state={state}
      />
      <NavBar
        state={state}
      />
      <button
        onClick={()=>setState(!state)}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px'
        }}
      >
        Change
      </button>
    </>
  );
}

export default App;
