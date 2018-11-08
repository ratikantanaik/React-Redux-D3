import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftNav from './components/nav/leftNavController';
import TopNav from './components/nav/topNavController';
import AppRouter from './components/router/appRouter';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid body-container">
          <div className="row">
            <div className="col-xs-2 ">
              <h1 className="logo"> 
                { this.props.app.appName } 
              </h1>
            </div>
            <div className="col-xs-10">
                <TopNav />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 padding-right-0">
              <LeftNav />
            </div>
            <div className="col-xs-10 padding-left-0">
              <AppRouter />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    app: state.app
  }
}

export default connect(mapStateToProps)(App);
