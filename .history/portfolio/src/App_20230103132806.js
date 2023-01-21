import NavSection from './Navbar';

import ProjectsForm from './ProjectsForm';
import Routing from './Routing';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavSection /> 
       
      </header> 
      <div>
     <Routing />
      </div>
      <ProjectsForm />
    </div>
  );
}

export default App;
