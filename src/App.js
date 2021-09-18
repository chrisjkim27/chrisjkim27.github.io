import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import AboutPage from './Pages/AboutPage';
import Photography from './Pages/Photography';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>

        <Switch>

          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={AboutPage} />
          <Route path='/past-projects' exact component={Projects} />
          <Route path='/photography' exact component={Photography} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/resume' exact component={Resume} />

        </Switch>


      </Router>
    </>
  );
}

export default App;
