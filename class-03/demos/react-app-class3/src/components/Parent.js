import React from 'react';
import ChildCat from './Child';
import Frankie from './assets/cat.jpg'

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Frankie',
            imgUrl: Frankie,
            numberOfTunainCabinet: 15
        }
    }

    giveTuna = () => {
        this.setState({
            numberOfTunainCabinet: this.state.numberOfTunainCabinet -1
        })
    }

    render() {
        return (
            <>
                <h2>parent</h2>
                <p>Number of Tuna in the Cabinet {this.state.numberOfTunainCabinet}</p>
                <ChildCat
                    catName={this.state.name}
                    imgUrll={this.state.imgUrl}
                    giveMeTuna={this.giveTuna}
                    />

                <ChildCat
                    catName={this.state.name}
                    imgUrll={this.state.imgUrl}
                    giveMeTuna={this.giveTuna}
                    />
            </>
        )
    }
}

export default Parent;