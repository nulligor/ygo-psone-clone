// (ripfoghorn) major refactoring necessary
import React, { Component } from "react";
import { Vector3 } from "three";
import  GameScreen  from "../../components/GameScreen/GameScreen";
import "./Game.css";
import { loadModel, } from "../../utils/Loader";

export default class Game extends Component {
    constructor() {
        super();
        this.requestGameLoop = this.requestGameLoop.bind(this);
        this.cancelGameLoop = this.cancelGameLoop.bind(this);
        this.gameLoop = this.gameLoop.bind(this);
        
        this.state = {
            cameraPosition: new Vector3( 0, 5, 0 ),
            lookAt: new Vector3( 0, 0, 0 )
        };
    }

    componentDidMount() {
        // Track if we're mounted so game loop doesn't tick after unmount
        this.mounted = true;
        /*
            (ripfoghorn): clara.io docs sets a mesh/ scene inside callback
            loader.load( 'monster.json', function ( geometry, materials ) {
                // (ripfoghorn) not sure mesh fiddling is necessary
                var mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
                scene.add( mesh );
            });
        */

        // (ripfoghorn) load the geometry in didMount, which is only executed server side.
        // note we can pass our JSON file paths to webpack!
        // loadModel(require("../../assets/board.json")).then( geometry => this.setState({ geometry })); 
        // (ripfoghorn) start the game loop when this component loads
        this.setState({geometry: {}})
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
        //  (ripfoghorn) currently looping itself
        this.setState( this.state );
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