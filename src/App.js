import './App.css';
import {useState} from 'react'
import CreateACharacter from './components/CreateACharacter';
import MainMenu from './components/MainMenu';


function App() {
  const [screen, setScreen] = useState('main')

  

  return (
    <div>
      {
        screen === 'main' ? <MainMenu setScreen={setScreen}/>
        : <CreateACharacter />
      }
    </div>
  );
}

export default App;
