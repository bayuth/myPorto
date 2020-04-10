import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Landing from './Landing';
import AboutSection from './AboutSection';
import Portofolio from './Portofolio';
import './css/Navigation.css';
import './css/bootstrap.css';

function Home(){
  return <Landing/>
}
function About(){
  return <AboutSection/>
}
function Porto(){
  return <Portofolio/>
}
function NoMatch() {
  return <h1>404 Not Found</h1>
}




class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <nav className="main_menu">
          <div className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <div className="Logo">
                <h2>My Portofolio</h2>
              </div>
              <div className="menu">
                <ul className="nav navbar-nav menu_nav">
                <li className="nav-item"> <Link  className="nav-link" to='/'>Home</Link> </li>
                <li className="nav-item"> <Link  className="nav-link" to='/about'>about</Link> </li>
                <li className="nav-item"> <Link  className="nav-link" to='/portofolio'>portofolio</Link> </li>
                <li className="nav-item"> <Link  className="nav-link" to='/contact'>contact</Link> </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route path='/portofolio' exact component={Porto}/>
            <Route component={NoMatch}/>
          </Switch>
        </main>
      
      </BrowserRouter>
    );
  }
}
export default App;
