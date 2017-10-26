import THREE from "three";
import * as types from "../constants/action_types";
import * as globals from "../constants/globals";

//  (ripfoghorn) autoRender should be false by implementation
const initialState = {
    sceneRotation: new THREE.Quaternion(),
    worldRotation: globals.WORLD_ROTATION,
    cameraPosition: new THREE.Vector3(0, 300, 500),
    cameraQuaternion: new THREE.Quaternion(),
    autoRender: false,
    sceneWidth: window.innerWidth,
    sceneHeight: window.innerHeight    
}

const getInitialState = () => Object.assign({}, initialState, {config: getConfig(initialState)});

const getConfig = (state) => {
    // still dont have the props stuff
    // let legLength = state.legLength
    // let legSize = state.legSize
    // let bodyWidth = state.bodyWidth
    // let bodyHeight = state.bodyHeight
    // let bodyDepth = state.bodyDepth
    // let headSize = state.headSize
    // let armSize = state.armSize
    // let armLength = state.armLength
}