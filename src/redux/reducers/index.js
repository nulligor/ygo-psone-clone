import THREE from "three";
// import * as types from "../constants/action_types";
import * as globals from "../constants/globals";

// (ripfoghorn) rootReducer is mostly serving for status delegating
const initialState = {
    // (ripfoghorn) PreBoard definition
    mainBoxWidth: 120,
    mainBoxHeight: 25,
    mainBoxDepth: 170,
    upPadSize: 120,
    upPadLength: 10,
    sceneRotation: new THREE.Quaternion(),
    worldRotation: globals.WORLD_ROTATION,
    cameraPosition: new THREE.Vector3(0, 300, 500),
    cameraQuaternion: new THREE.Quaternion(),
    sceneWidth: window.innerWidth,
    sceneHeight: window.innerHeight    
}

const getInitialState = () => Object.assign({}, initialState, {config: getConfig(initialState)});

const getConfig = (state) => {
    //  (ripfoghorn) these will probably not change
    let mainBoxWidth = state.mainBoxWidth;
    let mainBoxHeight = state.mainBoxHeight;
    let mainBoxDepth = state.mainBoxDepth;
    
    //  (ripfoghorn) lowPad is same as upPad but inverse
        //  so we can abstract it away
    let upPadSize = state.upPadSize;
    let upPadLength = state.upPadLength;

    // let lowPadSize = state.lowPadSize;
    // let lowPadLength = state.lowPadLength;

    //  (ripfoghorn) still gotta deal with the tetrahedrons
    return {
        mainBox: {
          size: {x: mainBoxWidth, y: mainBoxDepth, z: mainBoxHeight},
          position: {x: 0, y: 0, z: mainBoxHeight },
          color: 0xccc000
        },
        upPad: {
          size: {x: upPadSize, y: ( upPadSize / 2), z: ( upPadLength / 3)},
          position: {x: 0, y: - (mainBoxDepth / 3), z: (mainBoxHeight * 1.57) },
          color: 0xaea515
        },
        lowPad: {
            size: {x: upPadSize, y: ( upPadSize / 2), z: ( upPadLength / 3)},
            position: {x: 0, y: (mainBoxDepth / 3), z: (mainBoxHeight * 1.57) },
            color: 0xaea515
        },
        tetrA: {
            detail: 0,
            position: { x: 63, y: 68, z: 29 },
            radius: 21,
            color: 0x151555,
            rotation: new THREE.Euler(1.28, 0.8, 2)
        },
      }
}

const rootReducer = (state = getInitialState(), action) => {
    // switch(action.type) {
    //     case types.RESIZE:
    //     state = Object.assign({}, state, {
    //       sceneWidth: action.payload.width,
    //       sceneHeight: action.payload.height,
    //       config: getConfig(initialState)
    //     })
    //     break
    //   default:
    //     // just return state
    // }
    return state
} 

export default rootReducer;