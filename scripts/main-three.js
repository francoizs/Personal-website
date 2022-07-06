

// scene, camera, canvas & renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x252525);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.y = 2;
camera.position.z = 5;
camera.position.x = 2;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

var light=new THREE.PointLight(0xffffff,1,500)
light.position.set(10,10,25)
scene.add(light);

// objects
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 'rgb(149,255,128)' } );
const cube = new THREE.Mesh( geometry, material );
cube.position.y = 0;
cube.castShadow = true;
scene.add( cube );





function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
// resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})