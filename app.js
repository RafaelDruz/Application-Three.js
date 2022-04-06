let scene, camera, renderer, controls, container;

function init() {
  container = document.querySelector(".scene");
  scene = new THREE.Scene();
            
  camera = new THREE.PerspectiveCamera(75,  container.clientWidth / container.clientHeight, 1, 10000);
  camera.position.x = 600;
  camera.position.y = 300;
  camera.position.z = 1000;
  camera.lookAt(0, 0,0);
  scene.position.x = 0;
  scene.position.y = -400;
  scene.position.z = 0;

  renderer = new THREE.WebGLRenderer({alpha: true});
  renderer.setSize(container.clientWidth, container.clientHeight);
      
  container.appendChild(renderer.domElement);
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", renderer);
  controls.target.set(0, 0, 0);
      
  window.requestAnimationFrame(animate); 


  controls.minDistance = 1000;
  controls.maxDistance = 1500;
      
  controls.update();
    
  let light = new THREE.AmbientLight(0xffffff, 10);
  scene.add(light);
    
  let front = new THREE.DirectionalLight(0xffffff,0.5);
  front.position.set(0,500,500);
  scene.add(front);

  let top = new THREE.DirectionalLight(0xffffff,0.5);
  top.position.set(0,500,0);
  scene.add(top);

  let back = new THREE.DirectionalLight(0xffffff,0.5);
  back.position.set(0,500,-500);
  scene.add(back);

  let right = new THREE.DirectionalLight(0xffffff,0.5);
  right.position.set(500,50,0);
  scene.add(right);

  let left = new THREE.DirectionalLight(0xffffff,0.5);
  left.position.set(-500,50,0);
  scene.add(left);

  let down = new THREE.DirectionalLight(0xffffff,0.5);
  down.position.set(0, -500, 0);
  scene.add(down);
      
  animate();
}

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  scene.rotation.y += 0.005;
}
init();
    

let loader = new THREE.GLTFLoader();
loader.load("scene.gltf", function(gltf) {
  let mesh = gltf.scene.children[0];
  mesh.scale.set(10,10,10);
  scene.add(gltf.scene);
});

      
