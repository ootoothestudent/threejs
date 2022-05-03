
let scene, camera ,renderer, cube;
function init()
{
     scene = new THREE.Scene();
     camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth /window.innerHeight,
        0.1,1000
        ); //documentation values
     renderer = new THREE.WebGLRenderer({antialias:true});
    
    renderer.setSize(window.innerHeight, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
     cube = new THREE.Mesh( geometry, material );
    scene.add(cube);
    
    camera.position.z =5;

}


function animate()
{
 
    cube.rotation.x += 0.01;
    //cube.rotation.y += 0.05;
    requestAnimationFrame(animate);
    renderer.render(scene,camera);

    
}
function onWindowResize()
{camera.aspect = window.innerWidth/ window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerHeight, window.innerHeight);
}

//window.addEventListener('resize', onWindowResize, false );
init();
animate();
