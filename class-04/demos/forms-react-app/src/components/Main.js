import { wait } from '@testing-library/dom';
import React from 'react';
import {Form, Button} from 'react-bootstrap/';
// import Button from 'react-bootstrap/Button';
import FormInfo from './FormInfo';


class Main extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            name : '',
            age : '',
            favProgLang : 'JavaScript',
            likeCats : false,
            show: false,
        }
    }

    handelClose = () => {
        this.setState({
            show:false
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            show: true
        })
    }
    
    updateName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    updateLikeCats = (event) => {
        this.setState({
            likeCats: event.target.checked
        })
    }

    updateFavLang = (event) => {
        this.setState({
            favProgLang: event.target.value
        })
    }

    render() {
        return (
            <div>
                <p>In the Main</p>

                <Form onSubmit={this.submitForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter your name" onChange={this.updateName} />
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" name="age" placeholder="Enter your age" onChange={this.updateAge} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name="likeCats" label="Do you like cats?" onChange={this.updateLikeCats} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Form.Label>Select your favourite programming language</Form.Label>
                        <Form.Control as="select" custom name='favProgLang' onChange={this.updateFavLang}>
                            <option value='Javascript'>Javascript</option>
                            <option value='Csharp'>Csharp</option>
                            <option value='C++'>C++</option>
                            <option value='PHP'>PHP</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <FormInfo
                name={this.state.name}
                age={this.state.age}
                likeCats={this.state.likeCats}
                favProgLang={this.state.favProgLang}
                show={this.state.show}
                handelClose={this.handelClose}
                />
            </div>
        )
    }
}

export default Main;