import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Artist from './pages/Artist/Artist';
import './app.css';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:artistId' component={Artist} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
