import THREE from "three";
import React, { Component }from "react";
import PropTypes from "prop-types";
import React3 from "react-three-renderer";

class Tetrahedron extends Component {
    static displayName = "Tetrahedron"
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <mesh key={ THREE.Math.generateUUID() } 
            position={ new THREE.Vector3(this.props.position.x, this.props.position.y, this.props.position.z)}>
            <tetrahedronGeometry
                radius={this.props.radius}
                detail={this.props.detail}
            />
            <meshBasicMaterial color={this.props.color} />
        </mesh>
        )
  }
}

Tetrahedron.propTypes = {
  color: PropTypes.number,
  position: PropTypes.instanceOf(Object).isRequired,
  radius: PropTypes.number.isRequired,
  detail: PropTypes.number.isRequired
  
}

export default Tetrahedron
