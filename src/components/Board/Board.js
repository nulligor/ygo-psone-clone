import React, { Component } from "react";
import { PropTypes } from "prop-types" 
import React3 from "react-three-renderer";
import { Euler, Vector3, } from "three";

// (ripfoghorn) stateless as it is now
const Board = ({ position, rotation }) => <group position={ position } rotation={ rotation } >
    <mesh>
        <geometryResource
            resourceId="boardGeometry"
        />
        {/* <materialResource
            resourceId="robotTexture"
        /> */}
    </mesh>
</group>;

Board.propTypes = {
    position: PropTypes.instanceOf( Vector3 ).isRequired,
    //rotation: PropTypes.instanceOf( Euler ).isRequired,
}

export default Board;
