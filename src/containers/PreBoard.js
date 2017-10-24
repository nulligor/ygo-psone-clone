import THREE from "three";
import React, { Component } from "react";
import React3 from "react-three-renderer";
import Box from "../components/Box";
import Tetrahedron from "../components/Tetrahedron";
import {connect} from 'react-redux'

const mapStateToProps = function(state){
    return{
        position: state.characterPosition,
        quaternion: state.characterRotation,
        scale: new THREE.Vector3(1, 1, 1),
        config: state.config
    }
}
  
const mapDispatchToProps = function(dispatch){
    return {
        dispatch
    }
}
class PreBoard extends Component {
    static displayName = "PreBoard";

    constructor(props) {
        super(props)
    }
    render() {
        let config = this.props.config;
        //   (ripfoghorn) ??
        if(typeof config === 'undefined'){
            return (<group key={'placeholder'}></group>)
        }

        return (
         <group 
            key={'preboard'}
            position={this.props.position}
            quaternion={this.props.quaternion}
            scale={this.props.scale}
         >
            <Box key ={"mainbox"}/>
            <Box key ={"uppad"}/>
            <Box key ={"lowpad"}/>
            <Tetrahedron key ={"tetra"}/>
            <Tetrahedron key ={"tetrb"}/>
            <Tetrahedron key ={"tetrc"}/>
            <Tetrahedron key ={"tetrd"}/>
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