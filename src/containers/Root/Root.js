import React, { Component } from "react";
// import { PropTypes } from "prop-types";
// import { Provider } from "react-redux";
import  Game  from "../Game/Game"; 

// (ripfoghorn) saving reference for later
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import { App, DevTools } from 'containers';
// import { StartScreen, GameNewScreen, GameScreen } from 'views';

export default class Root extends Component {
    // constructor(props) {
    //     super(props);
    // }
    //(ripfoghorn) might have to call this binding some sockets or smt
    render() {
        return (
            <div>
                <Game/>
            </div>
        );
    }
}