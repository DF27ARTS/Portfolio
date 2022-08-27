import './App.css';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import Image from './components/Image/Image';
import { useState } from 'react';
import DayAndNightButton from './components/DayAndNightButton/DayAndNaightButton';
import EnglishSpanish from './components/EnglishSpanish/EnglishSpanish';

function App() {

  const [ state, setState ] = useState(true);
  const [ idiom, setIdiom ] = useState(false);

  return (
    <div className='App' >
      <Image
        state={state}
      />
      <Portfolio
        state={state}
        idiom={idiom}
      />
      <NavBar
        state={state}
        idiom={idiom}
      />
      <DayAndNightButton
        setState={setState}
        state={state}
      />
      <EnglishSpanish
        setIdiom={setIdiom}
        idiom={idiom}
      />
      
    </div>
  );
}

export default App;
