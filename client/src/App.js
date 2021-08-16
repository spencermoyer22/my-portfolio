import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div class='flex-column'>
        <Header />
        <div className='container pt-lg-5 pt-2'>
          <Switch>
            <Route exact path='/portfolio' component={About}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/resume' component={Resume}/>

            <Route component={About}/>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
