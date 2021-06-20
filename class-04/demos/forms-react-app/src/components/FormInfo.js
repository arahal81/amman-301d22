import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap/';


class FormInfo extends React.Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handelClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Form Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Name: {this.props.name}</p>
                        <p>Age: {this.props.age}</p>
                        <p>Fav Language: {this.props.favProgLang}</p>
                        <p>Do I like Cats? {this.props.likeCats ? 'yes':'no'}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handelClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default FormInfo;