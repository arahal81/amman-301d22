import React, { Component } from 'react'

export class Cats extends Component {
    render() {
        return (
            <>
                { this.props.showCatsComponent &&
                    this.props.cats.map((cat, idx) => {
                        return (
                            <div key={idx}>
                               <p>name : {cat.catName}</p> 
                               <p>breed: {cat.breed}</p>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default Cats