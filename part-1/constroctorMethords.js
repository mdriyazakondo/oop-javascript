function myThis(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}
// myThis.call({ a: 10, b: 20 }, 30, 60);
// myThis.apply({ a: 10, b: 20 }, [200, 400]);
// myThis.apply({});
// myThis();

var myBind = myThis.bind({ a: 25, b: 30 });
myBind(15, 50);
