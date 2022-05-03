
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
    
    const geometry = new THREE.BoxGeometry( 3, 3, 0.5 ); 
    //const material = new THREE.MeshBasicMaterial( {color: "silver"} );
    const texture = new THREE.TextureLoader().load('./textures/barktex.jpg');
   const material = new THREE.MeshBasicMaterial( {map:texture} );
      
    cube = new THREE.Mesh( geometry, material );
    scene.add(cube);
    
    camera.position.z =5;
// add floor


}


function animate()
{
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    //  cube.rotation.x += 0.015;
     cube.rotation.y += 0.05;
    //  cube.rotation.z += 0.015;

   

    
}
function onWindowResize()
{camera.aspect = window.innerWidth/ window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerHeight, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false );
init();
animate();
