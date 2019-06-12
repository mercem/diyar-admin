import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getAllModels } from '../../store/actions';
import { Button, Card, Image } from 'semantic-ui-react';

class Models extends Component {
  state={}

  componentDidMount() {
    this.props.getAllModels();
  }

  render(){
    const {models} = this.props;
    if(!models) return <>Yükleniyor..</>
    return(
      <Card.Group>
        {this.props.models.map(model => <ModelInfo key={model._id} data={model} />)}
      </Card.Group>
    )
  }
}

const ModelInfo = ({data}) => {
  return(
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={data.imageUrl} />
        <Card.Header>{data.name}</Card.Header>
        <Card.Meta>{data.subCategory}</Card.Meta>
        <Card.Description>
          Yükseklik: {data.height} cm
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='yellow'>
            Update
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    models: state.models.mine
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllModels: () => dispatch(getAllModels())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Models);