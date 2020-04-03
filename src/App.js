import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Home.js'
import { Helmet } from 'react-helmet';





class App extends React.Component {


  render() {
    return (

      <BrowserRouter>
        <Helmet>
          <title>Wheel of Bread</title>
          <meta name="description" content="A documentations of a legendary group chat" />
        </Helmet>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route component = {Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
