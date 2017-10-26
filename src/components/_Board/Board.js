import React, { PropTypes } from "react";
import React3 from "react-three-renderer";
import { Vector3, Euler } from "three";

// (ripfoghorn) stateless as it is now
const Board = ({ position, rotation }) => <group position={ position } rotation={ rotation } >
    <mesh>
        <geometryResource
            resourceId="boardGeometry"
        />
        <materialResource
            resourceId="boardTexture"
        />
    </mesh>
</group>;

Board.propTypes = {
    position: PropTypes.instanceOf( Vector3 ).isRequired,
    rotation: PropTypes.instanceOf( Euler ).isRequired,
}

export default Board;
