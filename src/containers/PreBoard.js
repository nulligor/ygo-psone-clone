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
    };
}
  
const mapDispatchToProps = function(dispatch) {
    return { dispatch };
}

// (ripfoghorn) https://stackoverflow.com/questions/22360936/will-three-js-object3d-clone-create-a-deep-copy-of-the-geometry
    // beware possibiliy of cloning an object and rendering it twice or whatever

    class PreBoard extends Component {
    static displayName = "PreBoard";

    constructor(props) {
        super(props)
    }
    render() {
        //   (ripfoghorn) :thinking_emoji:
        let config = this.props.config;
        if(typeof config === "undefined"){
            return (<group key={ "placeholder" }></group>)
        }
        console.log(config);
        return (
         <group 
            key={ "preboard" }
            position={this.props.position}
            quaternion={this.props.quaternion}
            scale={this.props.scale}>
            <Box 
                key={ "mainbox" }
                size={ config.mainBox.size }
                color={ config.mainBox.color }
                position={ config.mainBox.position }
            />
             <Box 
                key={ "uppad" }
                size={ config.upPad.size }
                color={ config.upPad.color }
                position={ config.upPad.position }
            />
            <Box 
                key={ "lowpad" }
                size={ config.lowPad.size }
                color={ config.lowPad.color }
                position={ config.lowPad.position }
            />  
            <group quaternion = { config.tetraGroupUp.quaternion }>
            <Tetrahedron 
                key={"tetra"}
                color={ config.tetrA.color }
                detail={config.tetrA.detail}
                radius={config.tetrA.radius}
                position={ config.tetrA.position }
            />
            </ group>
            {/*
            <Tetrahedron 
                key={"tetrb"}
                color={ config.tetrB.color }
                detail={config.tetrB.detail}
                position={ config.tetrB.position }
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
            /> */}
         </group>   
        )
    }
}
PreBoard.propTypes = {
    config: PropTypes.instanceOf(Object),
    position: PropTypes.instanceOf(THREE.Vector3),
    quaternion: PropTypes.instanceOf(THREE.Quaternion),
    scale: PropTypes.instanceOf(THREE.Vector3)
}

export default connect(mapStateToProps, mapDispatchToProps)(PreBoard);