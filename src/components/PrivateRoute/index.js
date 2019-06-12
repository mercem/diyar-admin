import React, { Component } from './node_modules/react';
import { Route, Redirect } from './node_modules/react-router-dom';
import { connect } from './node_modules/react-redux';

class PrivateRoute extends Component {
  render() {
    return this.props.user
    ? <Route {...this.props} />
    : <Redirect from={this.props.path} to={{pathname: 'login', state: this.props.location }} />
  }
}

const mapStateToProps = state => {
  return{
    user: state.auth.user
  } 
}
export default connect(mapStateToProps)(PrivateRoute);