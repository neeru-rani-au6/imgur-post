import React, { Component } from 'react';
import { registerUser } from '../redux/action/user';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Signup extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        isSubmitting:false
    }

    
    handleChange = (key, value) => {
        // if(key === 'name'){
        //     this.setState({'name':value});
        // }else if(key ==="email"){
        //     this.setState({'email':value});
        // }else if(key ==="password"){
        //     this.setState({'password':value});
        // }
        this.setState({
            [key]: value
        });
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({isSubmitting:true});
        await this.props.registerUser(this.state);
        this.setState({isSubmitting:false});
        if(!this.props.userState.error){
            this.props.history.push('/login');
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{ width: "50%", margin: "0 auto", marginTop: "30px" }}>
                    <div className="form-group">
                        <label htmlFor="exampleInputname">Name</label>
                        <input value={this.state.name} onChange={(e) => this.handleChange("name", e.target.value)} type="name" className="form-control" id="exampleInputname" aria-describedby="nameHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input value={this.state.email} onChange={(e) => this.handleChange("email", e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input value={this.state.password} onChange={(e) => this.handleChange("password", e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="error ">
                        {this.props.userState.error}
                    </div>
                    <button disabled={this.state.isSubmitting} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        userState: state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { registerUser }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);