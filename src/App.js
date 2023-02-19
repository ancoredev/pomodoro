import Timer from './components/Timer';
import Controls from './components/Controls';
import Settings from './components/Settings';

import { useState } from 'react';

import SettingsContext from './SettingsContext'; 

import './App.css';


function App() {
  const [ isSettingsOpen, setSettingsOpen ] = useState(false);
  const [ workDuration, setWorkDuration ] = useState(25);
  const [ breakDuration, setBreakDuration ] = useState(5);

  return (
    <div className="App">
      
      <SettingsContext.Provider value={{
        isSettingsOpen,
        setSettingsOpen,
        workDuration,
        setWorkDuration,
        breakDuration,
        setBreakDuration
      }}>
      <main>
      {
        isSettingsOpen ? 
        <Settings /> :
        <Timer />
      }
      </main>
      </SettingsContext.Provider>
      
    </div>
  );
}

export default App;
