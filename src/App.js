import React, {Component} from 'react';
import './App.css';
import Layout from './hoc/Layout'
import Models from './containers/Models';
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Layout location={this.props.location} history={this.props.history}>
        <Switch>
          <Route exact path='/' component={Models} />
          <Route component={() => <p>Ooops..</p>} />
        </Switch>
      </Layout>
    );
  } 
}

export default App;
