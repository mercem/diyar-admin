import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Grid, Responsive, Segment} from 'semantic-ui-react'
import SideMenu from './sideMenu';
import Login from '../../components/Login';

class Layout extends Component {
  render() {
    return (
      this.props.user ? 
      <>
        <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
          <Grid className='Layout'>
            <Grid.Column className='Content' width={16} style={{background: '#f7f7f7'}}>
              {this.props.children}
            </Grid.Column>
          </Grid>
        </Responsive>

        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid className='Layout'>
            <Grid.Column width={3} style={{background: '#8e0b3f'}}>
              <SideMenu {...this.props}/>
            </Grid.Column>
            <Grid.Column className='Content' width={13} style={{background: '#f7f7f7'}}>
              <Segment style={{ margin: '10px'}}>
                {this.props.children}
              </Segment>
            </Grid.Column>
          </Grid>
        </Responsive>
      </> 
      : <Login />
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  } 
}

export default connect(mapStateToProps)(Layout);