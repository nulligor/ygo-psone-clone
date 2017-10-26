//  (ripfoghorn) we prolly not using this \/
//  import OrbitControls from '../../lib/OrbitControls'
import THREE from "three";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import React3 from "react-three-renderer";
import {updateCamera, resize} from "../actions";
import World from "./World";
import PreBoard from "./PreBoard";
// import getStore from '../stores/configure_store' // singleton

