let prefixes = ["webkit", "moz", "ms", ""];

function prefixedEvent(element, type, callback) {
  for(let i = 0; i < prefixes.length; i++) {
    if(!prefixes[i]) type = type.toLowerCase();

    element.addEventListener(prefixes[i] + type, callback, false);
  }
}

function transform($e, x, y, scale, rotation, percent) {
  x = x || 0; y = y || 0; scale = scale || 1;
  unit = percent ? '%' : 'px';
  rotation = rotation || 0;

  transfromString = 'translate('+ x + unit + ', '+ y + unit + ') ' 
  + 'scale(' + scale + ') '
  + 'rotate(' + rotation + 'deg)';

  $e.style.webkitTransform = transfromString;
  $e.style.MozTransform = transfromString;
  $e.style.transform = transfromString;

}

function createParticle(x, y, scale) {
  var $particle = document.createElement('i');
  var $sparkle = document.createElement('i');

  $particle.className = 'particle';
  $sparkle.className = 'sparkle';

  transform($particle, x, y, scale);
  $particle.appendChild( $sparkle );

  return $particle;
}

function explosion($container) {
  var particles = [];

  particles.push( createParticle(0,0,1) );
  particles.push( createParticle(50,-15,0.4) );
  particles.push( createParticle(50,-105,0.2) );
  particles.push( createParticle(-10,-60,0.8) );
  particles.push( createParticle(-10,60,0.4) );
  particles.push( createParticle(-50,-60,0.2) );
  particles.push( createParticle(-50,-15,0.75) );
  particles.push( createParticle(-100,-15,0.4) );
  particles.push( createParticle(-100,-15,0.2) );
  particles.push( createParticle(-100,-115,0.2) );
  particles.push( createParticle(80,-15,0.1) );


  particles.forEach(function(particle){
    $container.appendChild( particle );

    prefixedEvent(particle, "AnimatedEnd", function(){
      let self = this;
      setTimeout(function(){
        requestAnimationFrame(function(){
          $container.removeChild(self);
        });
      }, 100);
    })
  })
}

function explodeGroup(x, y, trans) {
  let $container = document.createElement('div');

  $container.className = 'container';
  $container.style.top = y + 'px';
  $container.style.left = x + 'px';

  transform( $container, trans.x, trans.y, trans.scale, trans.r, true);

  explosion( $container );
  return $container;
}

function sparkle(event) {
  let explosions = [];

  explosions.push(explodeGroup(event.pageX, event.pageY, {scale: 1, x: -50, y: -50, r: 0}));
  explosions.push(explodeGroup(event.pageX, event.pageY, {scale: .5, x: -30, y: -50, r: 180}) );
  explosions.push(explodeGroup(event.pageX, event.pageY, {scale: .5, x: -50, y: -20, r: -90}) );

  requestAnimationFrame(function(){
    explosions.forEach(function(boom, i){
      setTimeout(function(){
        document.body.appendChild(boom);
      }, i * 100)
    })
  })
}

let interactionEvent = 'click';
if('ontouchstart' in document.documentElement){
  interactionEvent = 'touchstart';
}

document.addEventListener(interactionEvent, sparkle);