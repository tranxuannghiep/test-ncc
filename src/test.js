function foo(input) {
  let a = 100;
  if (input) {
    let b = a + 1;
    var c = a + 1;
  }
  console.log(c);
  //   console.log(b);
}
foo(true);
