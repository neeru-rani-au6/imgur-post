import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createPost } from '../redux/action/index';
import axios, { post } from 'axios';
class Upload extends Component {
    state = {
        file: null,
        photoUrl: "",
        title: "",
        description: "",
        isSubmitting: false
    }
    hndleFileChange = (e) =>{
        this.setState({ file: e.target.files[0] })
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        });
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({ isSubmitting: true });
        const formData = new FormData();
        formData.append('file',this.state.file);
        formData.append('photoUrl',this.state.photoUrl);
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        await this.props.createPost(formData)
       this.setState({ isSubmitting: false });
        if (!this.props.createpost.error) {
            this.props.history.push('/');
        }

    }


    render() {
        return (
            <div className="container">
                <div className="card" style={{ width: "500px", margin: "0 auto", marginTop: "20px", marginBottom: "20px" }}>
                    <img src="https://freepngimg.com/thumb/upload_button/25520-6-upload-button-transparent-image.png" className="card-img-top" alt="upload file" height="250px" />
                    <div className="card-body" style={{ margin: "0 auto" }}>
                        <h5 className="card-title"><i className="fa fa-picture-o" aria-hidden="true" style={{ margin: "5px" }}></i>choose photo</h5>

                        <form onSubmit={this.handleSubmit} style={{ width: "300px" }}>
                            <input type="file" className="btn btn-secondary" onChange={this.hndleFileChange} />
                                <div className="text-center mt-2">OR</div>
                            <div className="form-group">
                                <label htmlFor="exampleInputpost"> Img url</label>
                                <input value={this.state.photoUrl} onChange={(e) => this.handleChange("photoUrl", e.target.value)} type="post" className="form-control" id="exampleInputpost" aria-describedby="postHelp" />
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
        createpost: state.postReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { createPost }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);