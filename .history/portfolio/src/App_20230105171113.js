import NavSection from './Navbar';

import Routing from './Routing';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavSection /> 
       
      </header> 
      <div className='profile-body'>
     <Routing />
      </div>
      
    </div>
  );
}

export default App;
