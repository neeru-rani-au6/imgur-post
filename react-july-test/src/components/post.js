import React, { Component } from 'react';
//import Photodetail from './photodetail';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllData } from '../redux/action/index';
class Post extends Component {
    async componentDidMount() {
        await this.props.getAllData();
        console.log(this.props)
    }
    render() {
        return (
            <div className="container">
                <div className=" row posts" >
                    {this.props.posts && this.props.posts && this.props.posts.map((item) => (
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
    console.log(state)
    return {
        posts: state.postReducer.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { getAllData }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);