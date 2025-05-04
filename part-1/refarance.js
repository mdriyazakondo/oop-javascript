// var n = 10;
// function change(n) {
//   n = n + 100;
//   console.log(n);
// }
// change(n);
// console.log(n);

// var obj = {
//   a: 10,
//   b: 20,
// };
// function changeMe(obj) {
//   obj.a = obj.a + 100;
//   obj.b = obj.b + 100;
//   console.log(obj);
// }
// changeMe(obj);
// console.log(obj);
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
var rect5 = new Rectangle(59, 21);
rect5.draw();
