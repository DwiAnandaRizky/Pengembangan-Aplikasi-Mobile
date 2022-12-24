var name = "Nanda";

function first() {
  var a = "Hai";
  second();
  console.log(`${a} ${name}`);
}

function second() {
  var b = "Halo";
  third();
  console.log(`${b} ${name}`);
}

function third() {
  var c = "Ini";
  console.log(`${c} ${name}`);
}

first();