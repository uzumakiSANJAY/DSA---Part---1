function decimalToAny(n, k) {
  try {
    let num2 = 0;
    let sum = 0;
    let r = 0;
    while (n !== 0) {
      num2 = n % k;
      n = Math.floor(n / k);
      sum = sum + num2 * Math.pow(10, r);
      r++;
    }
    console.log(sum);
  } catch (error) {
    console.log(error);
  }
}
let k = 8;
let num = 634;

decimalToAny(num, k);
