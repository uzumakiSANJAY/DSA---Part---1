function anyToDecimal(n, k) {
  try {
    let num2 = 0;
    let sum = 0;
    let r = 0;
    while (n !== 0) {
      num2 = n % k;
      n = Math.floor(n / k);
      sum = sum + num2 * Math.pow(8, r);
      r++;
    }
    console.log(sum);
  } catch (error) {
    console.log(error);
  }
}
let k = 10;
let num = 1172;

anyToDecimal(num, k);
