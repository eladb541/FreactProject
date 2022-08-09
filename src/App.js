
import Navbar from './componenets/Navbar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../../self_project/src/Pages/Home";
import Menu from './Pages/Menu';

import Footer from './componenets/Footer';
import Weather from './Pages/Weather';
import Blue_Footed_Bubby from "../src/Pages/Blue_Footed_Bubby";
import Galapagos_Penguin from '../src/Pages/Galapagos_Penguin';
import red_footed from '../src/Pages/red_footed_booby';
import Waved_Albatross from '../src/Pages/Waved_Albatross';
import Marine_Iguana from '../src/Pages/Marine_Iguana';
import Galapagus_Turtle from '../src/Pages/Galapagus_Turtle';
import Pelecanus_occidentalis from '../src/Pages/Pelecanus_occidentalis';
import TTTapp from "../src/TicTacToe/TTTApp";
//create the connect between links to componentas by embadded them in navbar.




function App() {
  return (
    <div className="App">
      <span className="firstappnav">
     
      <Router>
        <Navbar/>
        
      <Switch className="switchApp">
          <Route path="/" exact component={Home}/>
  
          <Route path="/menu" exact component={Menu}/>
       
          <Route path="/tttapp" exact component={TTTapp}/>
          <Route path="/weather" exact component={Weather}/>
          <Route path="/blue_footed_bubby" exact component={Blue_Footed_Bubby}/>
          <Route path="/Galapagos_Penguin" exact component={Galapagos_Penguin}/>
          <Route path="/red_footed_booby" exact component={red_footed}/>
          <Route path="/Waved_Albatross" exact component={Waved_Albatross}/>
          <Route path="/Marine_Iguana" exact component={Marine_Iguana}/>
          <Route path="/Galapagus_Turtle" exact component={Galapagus_Turtle}/>
          <Route path="/Pelecanus_occidentalis" exact component={Pelecanus_occidentalis}/>


          



      </Switch>
      <br/>
      <br/>
      <Footer/>
    </Router>
    

    
      </span>
    </div>
  );
}

export default App;
