import THREE from "three";
import React, { Component } from "react";
import PropTypes from "prop-types";
import React3 from "react-three-renderer";
import Box from "../components/Box";
import Tetrahedron from "../components/Tetrahedron";
import { connect } from "react-redux"

// (ripfoghorn) still gotta think both of these thru
const mapStateToProps = function(state) {
    return{
        position: state.characterPosition,
        quaternion: state.characterRotation,
        scale: new THREE.Vector3(1, 1, 1),
        config: state.config
    }
}
  
const mapDispatchToProps = function(dispatch) {
    return {
        dispatch
    }
}

//(ripfoghorn) might have to fiddle with 
    //  all tetrahedrons radius 
    //  so keep that in mind-desu   
class PreBoard extends Component {
    static displayName = "PreBoard";

    constructor(props) {
        super(props)
    }
    render() {
        let config = this.props.config;
        if(typeof config === "undefined"){
            return (<group key={ "placeholder" }></group>)
        }
        return (
         <group 
            key={ "preboard" }
            position={this.props.position}
            quaternion={this.props.quaternion}
            scale={this.props.scale}>
            <Box 
                key={ "mainbox" }
                size={ config.mainbox.size }
                color={ config.mainbox.color }
                position={ config.mainbox.position }
            />
            <Box 
                key={ "uppad" }
                size={ config.uppad.size }
                color={ config.uppad.color }
                position={ config.uppad.position }
            />
            <Box 
                key={ "lowpad" }
                size={ config.lowpad.size }
                color={ config.lowpad.color }
                position={ config.lowpad.position }
            />
            <Tetrahedron 
                key={"tetra"}
                color={ config.tetra.color }
                position={ config.tetra.position }
            />
            <Tetrahedron 
                key={"tetrb"}
                color={ config.tetrb.color }
                position={ config.tetrb.position }
            />
            <Tetrahedron 
                key={"tetrc"}
                color={ config.tetrc.color }
                position={ config.tetrc.position }
            />
            <Tetrahedron 
                key={"tetrd"}
                color={ config.tetrd.color }
                position={ config.tetrd.position }
            />
         </group>   
        )
    }
}
PreBoard.propTypes = {
    config: PropTypes.instanceOf(Object).isRequired,
    position: PropTypes.instanceOf(THREE.Vector3),
    quaternion: PropTypes.instanceOf(THREE.Quaternion),
    scale: PropTypes.instanceOf(THREE.Vector3)
}

export default connect(mapStateToProps, mapDispatchToProps)(PreBoard);