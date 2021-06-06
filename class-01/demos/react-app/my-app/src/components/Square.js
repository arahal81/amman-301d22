import React from 'react';

class Square extends React.Component {
    render(){
        return(
            <div className='square'>Square {this.props.squareNumber}</div>
        )
    }
}

export default Square;