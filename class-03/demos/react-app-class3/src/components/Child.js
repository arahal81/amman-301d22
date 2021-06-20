import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Child extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfPets: 0,
      numberOfTakenTuna :0
    }
  }

  increaseNumberOfPets = () => {
    this.setState({
      numberOfPets: this.state.numberOfPets + 1
    })
  }

  needTuna = () => {
    this.setState({
      numberOfTakenTuna: this.state.numberOfTakenTuna + 1

    })
    this.props.giveMeTuna();

  }

  render() {
    return (
      <div>
        {/* <p>{this.props.catName}</p>
        <img onClick={this.increaseNumberOfPets} src={this.props.imgUrll} alt={this.props.catName} />
        <p>😸: {this.state.numberOfPets}</p> */}

        <Card style={{ width: '18rem' }}>
          <Card.Img onClick={this.increaseNumberOfPets} variant="top" src={this.props.imgUrll} />
          <Card.Body>
            <Card.Title>{this.props.catName}</Card.Title>
            <Card.Text>
            😸 Number of pets: {this.state.numberOfPets}
            </Card.Text>
            <Card.Text>
            😸 Number of Taken Tuna: {this.state.numberOfTakenTuna}
            </Card.Text>
            <Button onClick={this.needTuna} variant="primary">I need Tuna</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Child;