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
    return sum;
  } catch (error) {
    console.log(error);
  }
}
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
    return sum;
  } catch (error) {
    console.log(error);
  }
}
function anyToAny(n, k) {
  try {
    let anyToDec = anyToDecimal(n, k);
    let anyToA = decimalToAny(anyToDec, k);
    console.log("**", anyToA);
  } catch (error) {
    console.log(error);
  }
}
let k = 2;
let num = 172;

anyToAny(num, k);
