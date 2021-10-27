import './app.scss';
import Foreground from './components/foreground/Foreground';
import Background from './components/background/Background.jsx';

function App() 
{
  return (
    <div className="app">
      <div className="FG-container"><Foreground/></div>
      <div className="BG-container"><Background/></div>
    </div>
  );
}

export default App;
