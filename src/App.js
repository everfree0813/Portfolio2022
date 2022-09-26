import './App.css';
import { Navbar, AboutMe, Landing, Technologies, Portfolio, Contact } from './screens';

function App() {
    return ( 
       
       <div>
         <Navbar />
         <Landing />
          <AboutMe />  
         <Technologies />     
         <Portfolio />   
         <Contact/>
        </div>
    );
}

export default App;