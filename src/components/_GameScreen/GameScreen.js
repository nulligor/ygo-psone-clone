import React, { Component, PropTypes } from 'react';
import React3 from "react-three-renderer";
import THREE, { Vector3, Euler, Geometry, DoubleSide} from "three";
import Board  from "../_Board/Board";
 
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
        const { faces, vertices, faceVertexUvs, } = new THREE.BoxGeometry( 6, 1, 2 );
        
        return (
        <React3 mainCamera="camera" width={ width } height={ height } antialias>
            <resources>
                <texture resourceId="boardImage" url={ require( '../../assets/board-texture.jpg' ) } anisotropy={ 16 } /> 
             
                <meshPhongMaterial resourceId="boardTexture" side={ DoubleSide }>
                    <textureResource resourceId="boardImage"/>
                </meshPhongMaterial> 
             
                <geometry resourceId="boardGeometry" faces={ faces } vertices={ vertices } faceVertexUvs={ faceVertexUvs } />
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
                <ambientLight color={ 0xdddddd } />
                <Board position={ boardPosition } rotation={ boardRotation } />
            </scene>
        </React3>
    );
    }
}