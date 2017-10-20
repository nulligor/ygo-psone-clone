import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Provider } from "react-redux";
import { DevTools } from 'containers';

// gotta see exactly 
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import { App, DevTools } from 'containers';
// import { StartScreen, GameNewScreen, GameScreen } from 'views';

// (ripfoghorn) Will probably need to change this a bit \/

export default class Root extends Component {

    //  (ripfoghorn) dont have to implement socket for now 
        // probably  
    // static propTypes = {
    //     store: PropTypes.shape({
    //       getState: PropTypes.func.isRequired,
    //     }).isRequired,
    //     socket: PropTypes.shape({
    //       on: PropTypes.func.isRequired,
    //     }).isRequired,
    // }

    constructor(props) {
        super(props);
        this.withSocket = this.withSocket.bind(this);
    }
 
}