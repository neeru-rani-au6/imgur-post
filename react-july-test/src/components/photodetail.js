import React, { Component } from 'react';
import { currentPost, deletePost } from '../redux/action/index';
import { connect } from 'react-redux';
class Photodetail extends Component {
    async componentDidMount() {
        await this.props.currentPost(this.props.match.params.id);
        //console.log(this.props)
    }
    removeItem = (id) => {
        this.props.deletePost(id);
        if (!this.props.postDetails.error) {
            this.props.history.push('/');
        }

    }
    render() {
        return (
            <div>
                {this.props.postDetails ?
                    <div className="card mb-3" style={{ width: "840px", margin: "0 auto", marginTop: "20px" }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={this.props.postDetails.photoUrl} className="card-img" alt="about post" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Title: {this.props.postDetails.title}</h5>
                                    <p className="card-text">Description: {this.props.postDetails.description}</p>
                                    {this.props.user && (this.props.user.id === this.props.postDetails.userId) &&
                                        <>
                                            <button className="btn btn-danger" onClick={() => this.removeItem(this.props.postDetails.id)}>Delete post</button>
                                            <button className="btn btn-primary m-2" onClick={() => this.props.history.push('/Updatepost/' + this.props.postDetails.id)}>Update Post</button>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className="d-flex m-auto justify-content-center">
                        <div className="loader" />
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   // console.log(state)
    return {
        postDetails: state.postReducer.currentPost,
        user: state.userReducer.user

    }
}

export default connect(mapStateToProps, { currentPost, deletePost })(Photodetail);