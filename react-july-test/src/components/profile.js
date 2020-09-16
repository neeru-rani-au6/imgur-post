import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postByUser } from '../redux/action/index';
class Profile extends Component {
    async componentDidMount() {
        await this.props.postByUser();
        console.log(this.props)

    }
    render() {

        return (
            <div className="container">
                <div className="jumbotron profile">
                    <h1 className="display-4">{this.props.user.name}</h1>
                    <p className="lead">{this.props.user.email}</p>
                    {/* <p>{this.props.user.id}</p> */}
                </div>
                <div className="row">
                    {this.props.userPost && this.props.userPost.map((item) => (
                        <div className="col-4 mb-2" key={item.id}>
                            <div onClick={() => this.props.history.push('/detail/' + item.id)} className="card " >
                                <img src={item.photoUrl} className="card-img-top" alt="post" height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title m-0">Title: {item.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        user: state.userReducer.user,
        isAuthenticated: state.userReducer.isAuthenticated,
        userPost: state.postReducer.userPost
    }
}
export default connect(mapStateToProps, { postByUser })(Profile);