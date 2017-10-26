import * as types from '../constants/action_types'

export function updateCamera(e){
    return {
      type: types.UPDATE_CAMERA,
      payload: {
        position: e.position,
        quaternion: e.quaternion
      }
    }
  }
  
  export function resize(e){
    return {
      type: types.RESIZE,
      payload: {
        width: e.width,
        height: e.height
      }
    }
  }