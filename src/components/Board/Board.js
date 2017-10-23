// (ripfoghorn) this is the 3R Board (for now a dumb component thas supposed to rotate)
// this equals R3R Robot component
import React, { PropTypes } from "react";
// (ripfoghorn) SHOULD BE USING 
import React3 from "react-three-renderer";
import { Vector3 } from "three";

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
