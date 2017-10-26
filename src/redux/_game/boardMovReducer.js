import THREE, { Vector3, Euler, } from 'three';

const positionScale = 0.15;
const positionSpeed = 0.011;
const positionOffset = 0.22;

const rotationSpeed = 0.02;
const rotationScale = 0.13;

/**
 * We can manage our game state in a series of small, easy to reason about
 * functions
 **/
export default function boardMovReducer( oldState, time ) {
    
    // Merge the old state with the updated properties
    return {
        ...oldState,
        boardPosition: new Vector3( 0, 0, positionScale * Math.cos( time * positionSpeed ) + positionOffset ),
        boardRotation: new Euler( 0, 0, rotationScale * Math.cos( time * rotationSpeed ) )
    };
    
}
