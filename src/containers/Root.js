import React, { Component } from "react";
import Scene3D from "./Scene"; 

// (ripfoghorn) saving reference for later
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import { App, DevTools } from 'containers';
// import { StartScreen, GameNewScreen, GameScreen } from 'views';

export default class Root extends Component {
    static displayName = "Root";
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Scene/>
            </div>
        );
    }
}