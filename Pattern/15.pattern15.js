function xTable(num, dig) {
  try {
    for (let i = 1; i <= dig; i++) {
      let multi = num * i;
      console.log(`${num} * ${dig} = ${multi}`);
    }
  } catch (error) {
    console.log(error);
  }
}
let n = 5;
let digit = 10;
xTable(n, digit);
