import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {logout} from '../../store/actions';

import './Layout.css';

class SideMenu extends Component {

  redirectHandler = (redirectTo) => {
    this.props.history.push(redirectTo)
  }

  render() {
    return (
      <Grid textAlign='center' style={{paddingTop: '1em'}}>
        <MenuItem name='Modellerim' icon='gem' onClick={() => this.redirectHandler('/')}/>
        <MenuItem name='Çıkış Yap' icon='log out' onClick={this.props.logout} />
      </Grid>
    )
  }
}

const MenuItem = ({name, icon, onClick}) => {
  return (
    <Grid.Row className= 'SideMenuItem' onClick={onClick} style={{cursor:'pointer'}}>
      <Icon name={icon} size='large' />
      <div style={{marginTop: '10px'}}>
        {name}
      </div>
    </Grid.Row>
  )
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)