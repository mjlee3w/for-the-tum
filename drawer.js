//food
let aimX = null;
let aimY = null;
let currentX = null;
let currentY = null;

const canvasTag = document.querySelector("#drawer");

canvasTag.width = window.innerWidth * 2;
canvasTag.height = window.innerHeight * 2;

canvasTag.style.width = window.innerWidth + "px";
canvasTag.style.height = window.innerHeight + "px";

const context = canvasTag.getContext("2d");
context.scale(2, 2);

let i = 0;
const images = [
  "https://cdn.glitch.com/e95dfee7-4336-4b89-844e-51c8798a6ad2%2Fmochi.png?v=1609457380098",
  "https://cdn.glitch.com/e95dfee7-4336-4b89-844e-51c8798a6ad2%2Framen.png?v=1609457369173",
  "https://cdn.glitch.com/e95dfee7-4336-4b89-844e-51c8798a6ad2%2Fwaffle.png?v=1609457350927",
  "https://cdn.glitch.com/e95dfee7-4336-4b89-844e-51c8798a6ad2%2Fbanana%20milk.png?v=1609457338343",
  "https://cdn.glitch.com/e95dfee7-4336-4b89-844e-51c8798a6ad2%2Fpeach.png?v=1609486873110",
  "https://cdn.glitch.com/e95dfee7-4336-4b89-844e-51c8798a6ad2%2Fsamgyupsal.png?v=1609457312532",
  "https://cdn.glitch.com/e95dfee7-4336-4b89-844e-51c8798a6ad2%2Fchicken%20nuggies.png?v=1609487334034"
].map(src => {
  const image = document.createElement("img");
  image.src = src;
  return image;
});

document.addEventListener("mousemove", function(event) {
  aimX = event.pageX;
  aimY = event.pageY;
  if (currentX === null) {
    currentX = event.pageX;
    currentY = event.pageY;
  }
  // if(images[i].complete) {
  //   context.drawImage(images[i], event.pageX-150, event.pageY-140, 325, 275)
  // }
});

var boop = new Audio(
  "https://cdn.glitch.com/e95dfee7-4336-4b89-844e-51c8798a6ad2%2FBeepBox-Song%20(3)-%5BAudioTrimmer.com%5D%20(1).wav?v=1609603617430"
);

canvasTag.addEventListener("click", function() {
  i += 1;
  if (i >= images.length) {
    i = 0;
  }
  boop.play();
});

const draw = function() {
  if (currentX) {
    if (images[i].complete) {
      context.drawImage(images[i], currentX - 150, currentY - 140, 325, 275);
    }

    currentX += (aimX - currentX) * 0.1;
    currentY += (aimY - currentY) * 0.1;
  }

  requestAnimationFrame(draw);
};

draw();

var digest = new Audio(
  "https://cdn.glitch.com/e95dfee7-4336-4b89-844e-51c8798a6ad2%2FBeepBox-Song%20(4)-%5BAudioTrimmer.com%5D.wav?v=1609603905775"
);

document.getElementById("clear").addEventListener(
  "click",
  function() {
    context.clearRect(0, 0, canvasTag.width, canvasTag.height);
    digest.play();
  },
  false
);

//hotdog

// var imgTag = new Image();
// var canvas = document.getElementById("hotdog-icon");
// var context2 = canvas.getContext('2d');
// var x = canvas.width;
// var y = 0;

// imgTag.onload = animate;
// imgTag.src = "https://cdn.glitch.com/e95dfee7-4336-4b89-844e-51c8798a6ad2%2Fhotdog%20emoji.png?v=1609472537119";

// var h = window.innerHeight;
// var w = window.innerWidth;

// canvas.height = h;
// canvas.width = w;

// //moving image
// var mover = {
//   x: 0,
//   y: 0,
//   width: 40,
//   height: 40,
//   color: '#000',
//   down: true,
//   right: true
// }

// function animate() {
//   clear();
//   render();
//   rID = requestAnimationFrame(animate);
// }

// function clear() {
//   context2.clearRect(0, 0, canvas.width, canvas.height);
// }

// function render() {
//   //set direction
//   if (mover.down && mover.y >= h - mover.height)
//     mover.down = false;

//   if (!mover.down && mover.y <= 0)
//     mover.down = true;

//   if (mover.right && mover.x >= w - mover.width)
//     mover.right = false;

//   if (!mover.right && mover.x <= 0)
//     mover.right = true;

//   //make move
//   if (mover.right)
//     mover.x += 1.5;
//   else
//     mover.x -= 1.5;

//   if (mover.down)
//     mover.y += 1.5;
//   else
//     mover.y -= 1.5;

//   //drawRectangle(mover);
//   drawImage(mover);

// }

// function drawImage(mover) {
//   context2.drawImage(imgTag, mover.x, mover.y, 50, 50); // draw image at current position
// }
