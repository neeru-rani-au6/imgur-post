import React, { Component } from 'react';

class Favourite extends Component {
    render() {
        return (
            <div className="container">
                <div className="card" style={{ width: "18rem", margin: "10px" }}>
                    <img src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="card-img-top" alt="photo" height="250px" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Favourite;