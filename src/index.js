// import React from 'react';
// import ReactDOM from 'react-dom';

// import Adventure from './containers/Adventure';

// const App = () => <Adventure />;

// const DOMContainer = document.getElementById('app');
// ReactDOM.render(<App />, DOMContainer);

import * as THREE from 'three'
import GLTFLoader from 'three-gltf-loader';
const assetUrl = 'assets/Susan.glb'

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const loader = new GLTFLoader();

let model = null;

loader.load(assetUrl, (gltf) => {
    model = gltf.scene.children[0];
    model.position.set( 0, 0, 0 );
    model.scale.set( 1, 1, 1 );

    // const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

    model.traverse( function ( child ) {
        // if ( child.isMesh ) child.material = mat;
    });
    console.log(model);
    scene.add(model);
})

const pointLight = new THREE.PointLight(0xFFFFFF, 2.0, 20);
pointLight.position.set(1, 1, 1);
scene.add(pointLight);


var geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function animate() {
    requestAnimationFrame( animate );

    if(model) {
        model.rotation.y += 0.1;

    }

	renderer.render( scene, camera );
}
animate();
