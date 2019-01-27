const objectCanvas = document.getElementById('objectCanvas');
objectCanvas.width = window.innerWidth;
objectCanvas.height = window.innerHeight;
const ctx = objectCanvas.getContext('2d');

const objectNumber = 5;
const objects = [];

function object(){
  this.x = Math.round(Math.random() * objectCanvas.width);
  this.y = Math.round(Math.random() * objectCanvas.height);
  this.r = 30; 
  this.dy = 5;
  // this.wind=Math.random()*5
}

object.prototype.update=function(){
  ctx.fillStyle = "#000"
  ctx.beginPath()
  ctx.rect(this.x, this.y, this.r, this.r)
  ctx.fill()
  ctx.closePath()

  this.y += this.dy;
  if (this.y > objectCanvas.height) {
     this.y = 0;
     this.x = Math.round(Math.random() * objectCanvas.width);
     this.dy++;
  }
}

const fallingObject = () => {
  ctx.clearRect(0, 0, objectCanvas.width, objectCanvas.height)
  for (var i = 0; i < objectNumber; i++) {
     objects[i].update()
  }
}

window.onload = function(){
  for(i = 0; i < objectNumber; i++){
     objects.push(new object())
  } 
  setInterval(fallingObject, 50);

  // var video = document.getElementById('video');
  // var canvas = document.getElementById('canvas');

  // canvas.width = video.offsetWidth;
  // canvas.height = video.offsetHeight;

  // var context = canvas.getContext('2d');

  // var tracker = new tracking.ObjectTracker('face');
  // tracker.setInitialScale(4);
  // tracker.setStepSize(2);
  // tracker.setEdgesDensity(0.1);

  // tracking.track('#video', tracker, { camera: true });

  // tracker.on('track', function(event) {
  //   context.clearRect(0, 0, canvas.width, canvas.height);

  //   event.data.forEach(function(rect) {
  //     context.strokeStyle = '#a64ceb';
  //     context.strokeRect(rect.x, rect.y, rect.width, rect.height);
  //     context.font = '11px Helvetica';
  //     context.fillStyle = "#fff";
  //     context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
  //     context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
  //   });
  // });
}

