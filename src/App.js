import './App.css';
import Home from "./Components/home";
import Menu from "./Components/menu";
import {BrowserRouter as Router,Route} from 'react-router-dom';
function App() {
  return (<Router>
    <Route exact path="/" component={Menu}></Route>
    <Route exact path="/game" component={Home}></Route>
  </Router>
  );
}

export default App;
