import "../css/style.css";
import * as THREE from "three";
import { BoxBufferGeometry } from "three";

// Crea la scena
const scene = new THREE.Scene();

// Crea la camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Crea un cubo
const geometry = new BoxBufferGeometry(1, 1, 1, 5, 5, 5);
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Posiziona la camera
camera.position.z = 5;

// Crea il renderer e aggiungi automaticamente il canvas al DOM
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement); // Aggiungi il canvas creato al DOM
renderer.setSize(window.innerWidth, window.innerHeight); // Imposta le dimensioni del renderer

// Funzione di animazione
function animate() {
  requestAnimationFrame(animate);

  // Rotazione del cubo per animarlo
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Renderizza la scena con la camera
  renderer.render(scene, camera);
}

// Inizializza l'animazione
animate();
