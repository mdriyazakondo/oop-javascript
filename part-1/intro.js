var rect = {
  height: 100,
  width: 100,

  draw: function () {
    console.log("I am a rectangle");
    this.printProperties();
    console.log(this);
  },
  printProperties: function () {
    console.log("My Width" + " " + this.width);
    console.log("My Height" + " " + this.height);
  },
};
rect.draw();
// rect.width = 300;
// rect.draw();

function myFunc() {
  console.log(this);
}

new myFunc();
