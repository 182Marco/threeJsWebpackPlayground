import * as THREE from "three";

// Ottieni il canvas dal DOM
const canvas = document.querySelector(".draw ");

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
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Posiziona la camera
camera.position.z = 5;

// Crea il renderer e usa il canvas esistente
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

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
