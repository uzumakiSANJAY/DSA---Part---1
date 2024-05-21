let num = 51234;
let k = 7; //

function rotateNumber(n, k) {
  let count = 0;
  for (let item in JSON.stringify(n)) {
    count++;
  }

  if (k < 0) {
    k = count + k;
  }

  if (k > count) {
    k = k % count;
  }

  let val = 0;
  val = n % Math.pow(10, k);

  n = Math.floor(n / Math.pow(10, k));

  n = n + val * Math.pow(10, count - k);
  console.log(n);
}
rotateNumber(num, k);
