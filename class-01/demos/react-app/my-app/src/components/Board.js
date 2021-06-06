import React from 'react';
import Square from './Square';

class Board extends React.Component {
    render(){
        return(
            <div>
                <h3>Board Game</h3>
                {/* <div className='square'>Square One</div>
                <div className='square'>Square Two</div>
                <div className='square'>Square Three</div>
                <div className='square'>Square Four</div>
                <div className='square'>Square Five</div> */}

                <Square squareNumber={'one'}/>
                <Square squareNumber={'Two'}/>
                <Square squareNumber={'Three'}/>
                <Square squareNumber={'Four'}/>
                <Square squareNumber={'Five'}/>
                
            </div>
        )
    }
}

export default Board;