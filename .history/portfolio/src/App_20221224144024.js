import NavSection from './Navbar';
import TopSection from './TopSection';
import Profile from './ProfileSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavSection /> 
       
      </header> 
      <div>
     <TopSection />
     <Profile />
      </div>
    </div>
  );
}

export default App;
