import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import React3 from "react-three-renderer";
import { Vector3, Euler, Geometry} from "three";
import Board  from "../Board/Board";
 
/**
 * Our main class to display the game. This contains only view code! It's very
 * easy to reason about
 */
export default class GameScreen extends Component {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        cameraPosition: PropTypes.instanceOf( Vector3 ).isRequired,
        lookAt: PropTypes.instanceOf( Vector3 ).isRequired,
        geometry: PropTypes.instanceOf( Geometry ).isRequired,
        boardPosition: PropTypes.instanceOf( Vector3 ).isRequired,
        boardRotation: PropTypes.instanceOf( Euler ).isRequired,
    }
    render() {
        const {
            width, height, cameraPosition, geometry, lookAt, boardPosition,
            boardRotation 
        } = this.props;
        
        const { faces, vertices, faceVertexUvs, } = geometry;
        
        return <React3
            mainCamera="camera"
            width={ width }
            height={ height }
            antialias
        >
            <resources>
                {/* <texture
                    resourceId="robotImage" 
                    url={ require( '../../assets/sitepoint-robot-texture.jpg' ) }
                    anisotropy={ 16 }
                /> */}
                {/* <meshPhongMaterial
                    resourceId="robotTexture"
                    side={ DoubleSide }
                >
                    <textureResource
                        resourceId="robotImage"
                    />
                </meshPhongMaterial> */}
                <geometry
                    resourceId="boardGeometry"
                    faces={ faces }
                    vertices={ vertices }
                    faceVertexUvs={ faceVertexUvs }
                />
            </resources>
            <scene>
                <perspectiveCamera
                    name="camera"
                    fov={ 75 }
                    aspect={ width / height }
                    near={ 0.1 }
                    far={ 1000 }
                    position={ cameraPosition }
                    lookAt={ lookAt }
                />
                <ambientLight
                    color={ 0xdddddd }
                />
                <Board
                    position={ boardPosition }
                    rotation={ boardRotation }
                />
            </scene>
        </React3>;
    }
}