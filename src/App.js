import './App.css';
import Emoji from './Emoji';
import Api from './Api';
import Formhandling from './Formhandling';

function App() {
  return (
    <div className="App">
      <Formhandling />
      <Api/>
      <Emoji/>
    </div>
  );
}

export default App;
