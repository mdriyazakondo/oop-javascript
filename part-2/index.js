// function Person(name) {
//   this.name = name;
// }
// var p1 = new Person("HM Nayem");
// console.log(p1);
var person = {
  name: "riyaz",
};

// console.log(person);
// for (let i in person) {
//   console.log(i);
// }
// console.log(Object.keys(person));

// var descriptor = Object.getOwnPropertyDescriptor(person, "name");
// console.log(descriptor);
Object.defineProperty(person, "name", {
  enumerable: false,
  writable: false,
  configurable: false,
  value: "md riyaz akondo",
});
