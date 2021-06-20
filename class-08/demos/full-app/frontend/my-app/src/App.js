import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      error : ''
    }
  }


  getPhotos = (e) => {
    // localhost:3001/photo?searchQuery=book
    e.preventDefault();
    const searchQ = e.target.searchQ.value;
    console.log(searchQ);
    const SERVER_LINK = 'http://localhost:3001';
    const url = `${SERVER_LINK}/photo?searchQuery=${searchQ}`;
    // const photoArray = await axios.get(url);

    axios.get(url).then(photoArray =>{
      this.setState({
      photos : photoArray.data
      })
    })
    .catch(err=>{
      console.log("errorrrrr",err.message);
      this.setState({
        error : err.message
      })
    })
    
  }

  render() {
    return (
      <>
        <Form onSubmit={this.getPhotos}>
          <Form.Group controlId="searchQuery">
            <Form.Label>Find Photos About...</Form.Label>
            <Form.Control type="text" placeholder="Enter a search term" name='searchQ'/>
          </Form.Group>
          <Button type="submit">
            Submit
          </Button>
        </Form>
      {
        this.state.photos.map((photo,idx)=>{
          return (
            <div key={idx}>
              <p>Number of Likes: {photo.numLikes}</p>
              <p>URL: {photo.imgUrl}</p>
            </div>
          )
        })
      }

      {this.state.error}
      </>
    )
  }
}

export default App;