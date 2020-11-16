import { useState } from 'react'
import Header from './Header'
import Main from './Main'

import './App.css';

function App() {
  const [activeView, setActiveView] = useState('dev')
  return (
    <div className="App">
      <div>
        <Header onSetActiveView={setActiveView}/>
        <Main activeView={activeView}/>
      </div>
    </div>
  );
}

export default App;
