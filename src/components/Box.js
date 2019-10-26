import THREE from "three";
import React, { Component }from "react";
import PropTypes from "prop-types";
import React3 from "react-three-renderer";

class Box extends Component {
    static displayName = "Box"
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <mesh key={ THREE.Math.generateUUID() } 
            position={ new THREE.Vector3(this.props.position.x, this.props.position.y, this.props.position.z)}>
            <boxGeometry
                width={this.props.size.x}
                height={this.props.size.y}
                depth={this.props.size.z}
            />
            <meshBasicMaterial color={this.props.color} />
        </mesh>
        )
  }
}

Box.propTypes = {
  color: PropTypes.number,
  position: PropTypes.instanceOf(Object).isRequired,
  size: PropTypes.instanceOf(Object).isRequired
}

export default Box
