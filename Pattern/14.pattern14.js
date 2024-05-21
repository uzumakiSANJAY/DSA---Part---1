let num = 4;
function pattern(n) {
  try {
    for (let i = 0; i < n; i++) {
      let s = "";
      let icj = 1;
      for (let j = 0; j <= i; j++) {
        s = s + " " + icj;
        let icjp1 = (icj * (i - j)) / (j + 1);
        icj = icjp1;
      }

      console.log(s);
    }
  } catch (error) {
    console.log(error);
  }
}

pattern(num);
