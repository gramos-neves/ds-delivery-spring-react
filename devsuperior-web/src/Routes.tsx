import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Orders from './pages/Orders';


const Routes =() =>{

    return(
        <BrowserRouter>
             <Navbar />
             <Switch>
                 <Route exact  path="/"  component={Home}  />
                 <Route  path="/orders"  component={Orders} />
             </Switch>
        </BrowserRouter>
    )
}


export default Routes

