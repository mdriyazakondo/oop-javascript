// var createRect = function (width, height) {
//   return {
//     height: height,
//     width: width,

//     draw: function () {
//       console.log("I am a rectangle");
//       console.log(this);
//       this.printProperties();
//     },
//     printProperties: function () {
//       console.log("Rectangle is a height " + " " + this.height);
//       console.log("Rectangle is a width " + " " + this.width);
//     },
//   };
// };

// var rect1 = createRect(10, 40);
// rect1.draw();
var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("I am a rectangle");
    console.log(this);
    this.printProperties();
  };
  this.printProperties = function () {
    console.log("Rectangle is a height " + " " + this.height);
    console.log("Rectangle is a width " + " " + this.width);
  };
};

var rect3 = new Rectangle(30, 45);
rect3.draw();
