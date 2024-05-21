let num = 4;
function pattern(n) {
  try {
    let a = 0;
    let b = 1;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      let s = "";
      for (let j = 1; j <= i; j++) {
        s = s + " " + a;
        sum = a + b;
        a = b;
        b = sum;
      }

      console.log(s);
    }
  } catch (error) {
    console.log(error);
  }
}

pattern(num);
