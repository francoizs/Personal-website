// scene, camera & renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFF5858);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.y = 0;
camera.position.z = 0;
camera.position.x = 0;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// objects
for (var i = 0; i < 1; i++) {
    const geometry = new THREE.RingGeometry( 1, 5, 1000, 3, 0, Math.PI * 2 );
    var material = new THREE.PointsMaterial({
        size: 0.015
    });
    var points = new THREE.Points( geometry, material );
    points.position.x = -0.24;
    points.position.y = -0.4;
    points.position.z = -9;
    scene.add( points );
}

// mouse
document.addEventListener('mousemove', animatePoints)
let mouseX = 0;
let mouseY = 0;

function animatePoints(e) {
    mouseX = e.clientX
    mouseY = e.clientY
}
const projects_section = document.querySelector('.projects-section');
projects_section.addEventListener('mousemove', stopLooking)
let mouse_y = [];
function stopLooking(e) {
    mouse_y.push(e.clientY)
}

// animation function
function animate() {
    if (window.innerWidth > 768) {
        if (mouse_y[mouse_y.length - 1] !== mouseY) {
            points.rotation.x = 0.0025 * (mouseY - window.innerHeight / 2);
            points.rotation.y = 0.0015 * (mouseX - window.innerWidth / 2);
        }
    }
    if (window.innerWidth <= 768 ) {
        points.position.z = -9;
        points.position.x = 0
        points.rotation.x += 0.005
        points.rotation.y += 0.005
    }
    if (window.innerWidth <= 425 ) {
        points.position.z = -13;
        points.position.x = 0
        points.rotation.x += 0.005
        points.rotation.y += 0.005
    }
    if (window.innerWidth <= 375 ) {
        points.position.z = -14;
        points.position.x = 0
        points.rotation.x += 0.0002
        points.rotation.y += 0.0002
    }
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