import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { currentPost, updatePost } from '../redux/action/index';
class Upload extends Component {
    async componentDidMount() {
        if (!this.props.postDetails) {
            await this.props.currentPost(this.props.match.params.id);
        }
        await this.setState({
            imgUrl: this.props.postDetails.photoUrl,
            title: this.props.postDetails.title,
            description: this.props.postDetails.description,
        })
    }
    state = {
        imgUrl: '',
        title: '',
        description: '',
        isSubmitting: false
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        });
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({ isSubmitting: true });
        var data = {
            ...this.state, id: this.props.match.params.id
        }
        await this.props.updatePost(data)
        this.setState({ isSubmitting: false });
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="container">
                <div className="card" style={{ width: "500px", margin: "0 auto", marginTop: "20px", marginBottom: "20px" }}>
                    <div className="card-body" style={{ margin: "0 auto" }}>
                        <h5 className="card-title"><i className="fa fa-picture-o" aria-hidden="true" style={{ margin: "5px" }}></i>choose photo</h5>

                        <form onSubmit={this.handleSubmit} style={{ width: "300px" }}>
                            <div className="form-group">
                                <label htmlFor="exampleInputpost"> Img url</label>
                                <input value={this.state.imgUrl} onChange={(e) => this.handleChange("imgUrl", e.target.value)} type="post" className="form-control" id="exampleInputpost" aria-describedby="postHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputtitle">Title</label>
                                <input value={this.state.title} onChange={(e) => this.handleChange("title", e.target.value)} type="title" className="form-control" id="exampleInputtitle" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputDescription">Description</label>
                                <input value={this.state.description} onChange={(e) => this.handleChange("description", e.target.value)} type="Description" className="form-control" id="exampleInputDescription" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        {/* <button className="card-text btn btn-primary">paste image or url</button> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        postDetails: state.postReducer.currentPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { currentPost, updatePost }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);