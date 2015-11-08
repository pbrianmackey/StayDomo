$(function(){
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  var geometry2 = new THREE.BoxGeometry( 2, 2, 2 );
  var material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube2 = new THREE.Mesh( geometry2, material2 );

  cube2.position.x = 2;
  cube2.position.y = 2;
  cube2.position.z = 0;
  scene.add( cube2 );

  camera.position.z = 10;

  function render() {
    requestAnimationFrame( render );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cube2.rotation.x += 0.02;
    cube2.rotation.y += 0.02;

    renderer.render( scene, camera );
  }
  render();
})
