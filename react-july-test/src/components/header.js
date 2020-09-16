import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../redux/action/user';
class Header extends Component {

    componentDidMount() {

        console.log(this.props.userState)
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                        </div>
                        <div className="nav-item">
                            <Link className="navbar-brand text" to="/">Imgur</Link>
                        </div>

                        <Link to="/upload" className="btn btn-success" style={{ margin: "10px" }}><i className="fa fa-plus-square" aria-hidden="true"></i> New Post</Link>

                    </div>
                    {(this.props.isAuthenticated && this.props.user) ?
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                {this.props.user.name}
                            </button>
                            <div className="dropdown-menu">
                                <Link to="/profile" className="dropdown-item btn" >Profile</Link>
                                <button className="dropdown-item btn" onClick={this.props.userLogout}>Logout</button>
                            </div>

                        </div>
                        :
                        <div>
                            <Link to="/Login" style={{ color: "white", fontSize: "20px" }}>Login</Link>
                            <Link to="/signup" style={{ margin: '10px', color: "white", fontSize: '20px' }}>Sign up</Link>
                        </div>
                    }
                </nav>


            </div>

        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        user: state.userReducer.user,
        isAuthenticated: state.userReducer.isAuthenticated
    }
}

export default connect(mapStateToProps, { userLogout })(Header);