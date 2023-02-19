import Timer from './components/Timer';
import Controls from './components/Controls';
import Settings from './components/Settings';

import { useState } from 'react';

import './App.css';


function App() {
  const [isSettingsOpen, setSettignsOpen] = useState(true);

  return (
    <div className="App">
      <main>
        {
          !isSettingsOpen ? 
          (
            <div className="pomodoro">
              <Timer />
              <Controls />
            </div>
          ) : (
            <Settings />
          )
        }
        
        
        
      </main>
      
    </div>
  );
}

export default App;
