import THREE from "three";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import React3 from "react-three-renderer";
import {updateCamera, resize} from "../redux/actions";
import World from "./World";
import PreBoard from "./PreBoard";
import OrbitControls from "../utils/OrbitControls";
import getStore from "../redux/utils/configureStore"; // singleton

const mapDispatchToProps = function(dispatch) {
    return { dispatch };
}
const mapStateToProps = function(state) {
    return {
        sceneWidth: state.sceneWidth,
        sceneHeight: state.sceneHeight,
        cameraPosition: state.cameraPosition,
        cameraQuaternion: state.cameraQuaternion,
        worldPosition: state.worldPosition,
        worldQuaternion: state.worldQuaternion        
    };
}
class SceneComponent extends Component {
    static displayName = "Scene3D";
    constructor(props) {
        super(props);
        this.storeInstance = getStore();
        this.onResizeListener = this._onResize.bind(this);
    }
    componentDidMount() { 
        this._canvas = ReactDOM.findDOMNode(this.refs.react3);
        this._camera = this.refs.camera;
        this._orbitControls = new THREE.OrbitControls(this._camera, this._canvas);
        window.addEventListener("RESIZE", this.onResizeListener);
    }   
    componentWillUnmount() {
        this._orbitControls.dispose();
        window.removeEventListener("RESIZE", this.onResizeListener);
    }
    _onResize(){
        this.props.dispatch(resize({
          width: window.innerWidth,
          height: window.innerHeight
        }));
    }
    render() {
        return (
          <React3
            ref="react3"
            mainCamera="camera"
            width={this.props.sceneWidth}
            height={this.props.sceneHeight}
            antialias
            shadowMapEnabled={true}
            clearColor={0x333333}
            forceManualRender={false}
            onManualRenderTriggerCreated={this._onManualRenderTriggerCreated}
          >
            <scene
              ref="scene"
            >
              <perspectiveCamera
                ref="camera"
                name="camera"
                fov={50}
                aspect={this.props.sceneWidth / this.props.sceneHeight}
                near={1}
                far={1000}
                position={this.props.cameraPosition}
                quaternion={this.props.cameraQuaternion}
              />
    
              <ambientLight
                color={new THREE.Color(0x333333)}
              />
    
              <directionalLight
                color={new THREE.Color(0xFFFFFF)}
                intensity={1.5}
                position={new THREE.Vector3(0, 0, 60)}
              />
              <World store={this.storeInstance}>
                <PreBoard store={this.storeInstance}/>
              </World>
            </scene>
          </React3>
        )
      }    
}

export default connect(mapStateToProps, mapDispatchToProps)(SceneComponent);