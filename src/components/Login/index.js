import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Segment, Form, Button } from 'semantic-ui-react'
import {login} from '../../store/actions';
import './Login.css';

class Login extends Component {

  state={
    email: '',
    password: ''
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { login } = this.props;
    const {email, password} = this.state;
    return (
      <div className='LoginContainer'>
          <Segment className='LoginSegment'>
            <Form>
              <Form.Field>
                <label>Kullanıcı Adı</label>
                <input name='email' onChange={this.changeHandler} placeholder='Kullanıcı Adı' />
              </Form.Field>
              <Form.Field>
                <label>Parola</label>
                <input name='password' onChange={this.changeHandler} placeholder='Parola' type="password" />
              </Form.Field>
              <Button onClick={() => login({email, password})} style={{width: '100%'}}>
                Giriş
              </Button>
            </Form>
          </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  } 
}

const mapDispatchToProbs = dispatch => {
  return {
    login: creds => dispatch(login(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProbs)(Login);