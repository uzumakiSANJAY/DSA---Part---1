let a = 36;
let b = 24;

function gcd(a, b) {
  let val = 0;
  while (b !== 0) {
    val = a % b;
    a = b;
    b = val;
  }
  console.log(a);
}

gcd(a, b);
