import React from 'react';
import { App, Sphere } from 'react-whs';
import * as THREE from 'three';
import * as WHS from 'whs';

export default () => (
  <App
    modules={[
      new WHS.ElementModule(), // Apply to DOM.
      new WHS.SceneModule(), // Create a new THREE.Scene and set it to app.

      new WHS.DefineModule(
        'camera',
        new WHS.PerspectiveCamera({
          // Apply a camera.
          position: new THREE.Vector3(0, 0, 50),
        }),
      ),

      new WHS.RenderingModule({ bgColor: 0x162129 }), // Apply THREE.WebGLRenderer
      new WHS.ResizeModule(), // Make it resizable.
    ]}
  >
    <Sphere geometry={[3, 32, 32]} material={new THREE.MeshBasicMaterial({ color: 0xffffff })} />
  </App>
);
