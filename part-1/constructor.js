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

// var rect3 = new Rectangle(30, 45);
// rect3.draw();

function myNew(constructor) {
  var obj = {};
  Object.getPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));
  return obj;
}

var rect4 = myNew(Rectangle, 45, 67);
rect4.draw();
