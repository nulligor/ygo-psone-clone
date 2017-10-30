import THREE from "three";
import * as types from "../constants/action_types";
import * as globals from "../constants/globals";

//  (ripfoghorn) autoRender should be false by implementation
const initialState = {
    mainBoxWidth: 120,
    mainBoxHeight: 50,
    mainBoxDepth: 170,
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
    // let upPadSize = state.upPadSize;
    // let upPadLength = state.upPadLength;
    // let lowPadSize = state.lowPadSize;
    // let lowPadLength = state.lowPadLength;
    //  (ripfoghorn) still gotta deal with the tetrahedrons
    return {
        // (ripfoghorn) ?
        // head: {
        //   size: {x: headSize, y: headSize, z: headSize},
        //   position: {x: 0, y: 0, z: (legLength + bodyHeight) + (headSize / 2)},
        //   color: 0xcc00cc
        // },
        mainBox: {
          size: {x: mainBoxWidth, y: mainBoxDepth, z: mainBoxHeight},
          position: {x: 0, y: 0, z: (mainBoxHeight / 2)},
          color: 0xccc000
        }
        // leftLeg: {
        //   size: {x: legSize, y: legSize, z: legLength},
        //   position: {x: -((bodyWidth / 2) - (legSize / 2)), y: 0, z: (legLength / 2)},
        //   color: 0x0cc000
        // },
        // rightLeg: {
        //   size: {x: legSize, y: legSize, z: legLength},
        //   position: {x: ((bodyWidth / 2) - (legSize / 2)), y: 0, z: (legLength / 2)},
        //   color: 0x0cc000
        // },

        // leftArm: {
        //   size: {x: armSize, y: armSize, z: armLength},
        //   position: {x: -((bodyWidth / 2) + (armSize / 2)), y: 0, z: (legLength + bodyHeight) - (armLength / 2)},
        //   color: 0x00ccc0
        // },
        // rightArm: {
        //   size: {x: armSize, y: armSize, z: armLength},
        //   position: {x: ((bodyWidth / 2) + (armSize / 2)), y: 0, z: (legLength + bodyHeight) - (armLength / 2)},
        //   color: 0x00ccc0
        // }
      }
}

const rootReducer = (state = getInitialState(), action) => {
    switch(action.type) {
        case types.RESIZE:
        state = Object.assign({}, state, {
          sceneWidth: action.payload.width,
          sceneHeight: action.payload.height,
          config: getConfig(initialState)
        })
        break
  
      default:
        // just return state
    }
    return state
} 

export default rootReducer;