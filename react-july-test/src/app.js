import React, { Component } from 'react';
//import Favourite from './components/favourite';
//import Footer from './components/footer';
import Header from './components/header';
import Post from './components/post';
import Login from './components/login';
import Signup from './components/Signup';
import Upload from './components/upload';
import Updatepost from './components/updatepost';
import Photodetail from './components/photodetail';
import Profile from './components/profile';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />

                    <Route path="/" component={Post} exact />
                    <Route path="/detail/:id" component={Photodetail} exact />
                    <Route path="/upload" component={Upload} exact />
                    <Route path="/Updatepost/:id" component={Updatepost} exact />
                    <Route path="/Login" component={Login} exact />
                    <Route path="/signup" component={Signup} exact />
                    <Route path="/profile" component={Profile} exact/>
            </BrowserRouter>
        )
    }
}

export default App;