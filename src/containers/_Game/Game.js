// (ripfoghorn) major refactoring necessary
import React, { Component } from "react";
import { Vector3 } from "three";
import  GameScreen  from "../../components/_GameScreen/GameScreen";
import "./Game.css";
import { loadModel, } from "../../utils/Loader";
import boardMovReducer from '../../redux/_game/boardMovReducer';

export default class Game extends Component {
    constructor() {
        super();
        this.requestGameLoop = this.requestGameLoop.bind(this);
        this.cancelGameLoop = this.cancelGameLoop.bind(this);
        this.gameLoop = this.gameLoop.bind(this);
        
        // centralized
        this.state = {
            cameraPosition: new Vector3( 0, 5, 0 ),
            lookAt: new Vector3( 0, 0, 0 )
        };
    }

    componentDidMount() {
        this.mounted = true;
        loadModel(require("../../assets/sitepoint-robot.json")).then( geometry => this.setState({ geometry })); 
        this.requestGameLoop();
    }
    componentWillUnmount() {
        this.mounted = false;
        this.cancelGameLoop();
    }
    requestGameLoop() {
        this.reqAnimId = window.requestAnimationFrame( this.gameLoop );
    }
    cancelGameLoop() {
        window.cancelAnimationFrame( this.reqAnimId );
    }
    gameLoop( time ) {
        if( !this.mounted ) {
            return;
        }
        this.requestGameLoop();
        this.setState( boardMovReducer( this.state, time ) );
    }
    render() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const {
            cameraPosition, geometry, lookAt, boardPosition, boardRotation,
        } = this.state;
        // Pass the data <Game /> needs to render. Note we don't show the game
        // until the geometry model file is loaded. This could be replaced with
        // a loading  screen, or even a 3d scene without geometry in it
        return <div>
            { geometry ? <GameScreen
                width={ width }
                height={ height }
                cameraPosition={ cameraPosition }
                lookAt={ lookAt }
                geometry={ geometry }
                boardPosition={ boardPosition }
                boardRotation={ boardRotation }
            /> : 'Loading Geometry...' }
        </div>;

    }

}