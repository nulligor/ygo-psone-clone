import THREE from "three";
import React, { Component }from "react";
import PropTypes from "prop-types";
import React3 from "react-three-renderer";

class Tetrahedron extends Component {
    // (ripfoghorn) try rotating tetrahedron mesh
    static displayName = "Tetrahedron"
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <mesh key={ THREE.Math.generateUUID() }
            rotation={ this.props.rotation } 
            position={ new THREE.Vector3(this.props.position.x, this.props.position.y, this.props.position.z) }>
            <tetrahedronGeometry
                radius={ this.props.radius }
                detail={ this.props.detail }
            />
            <meshBasicMaterial color={ this.props.color } />
        </mesh>
        )
  }
}

Tetrahedron.propTypes = {
  color: PropTypes.number,
  position: PropTypes.instanceOf(Object).isRequired,
  radius: PropTypes.number.isRequired,
  detail: PropTypes.number.isRequired,
  rotation: PropTypes.instanceOf(THREE.Euler).isRequired
}

export default Tetrahedron
