import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'



function App() {
  return (
    <Router>
    <div>
     <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
     
     </Routes>
    </div>
    </Router>
 
  );
}

export default App;
