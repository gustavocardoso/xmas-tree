(function() {
  var tree = document.querySelector('.xmas-tree');
  var audio = document.querySelector('.player');
  var snowSmallHolder = document.querySelector('.snow-small-holder');
  var snowNormalHolder = document.querySelector('.snow-normal-holder');
  var snowMediumHolder = document.querySelector('.snow-medium-holder');

  for(var count = 1; count <= 20; count++) {
    var element = document.createElement('div');
    element.classList.add('snow');
    element.classList.add('snow-small');
    snowSmallHolder.appendChild(element);
  }

  for(var count = 1; count <= 10; count++) {
    var element = document.createElement('div');
    element.classList.add('snow');
    element.classList.add('snow-normal');
    snowNormalHolder.appendChild(element);
  }

  for(var count = 1; count <= 10; count++) {
    var element = document.createElement('div');
    element.classList.add('snow');
    element.classList.add('snow-medium');
    snowMediumHolder.appendChild(element);
  }

  window.addEventListener('devicelight', function(event) {
    var lux = event.value;

    audio.load();

    if(lux < 3) {
      document.body.classList.add('lights-off');
      audio.play();
      tree.classList.add('animate');
    }

    if(lux > 3) {
      document.body.classList.remove('lights-off');
      tree.classList.remove('animate');
      audio.pause();
    }
  }, false);
})();