let num = 9;
function pattern(n) {
  try {
    let spc1 = Math.floor(n / 2);
    let spc2 = -1;
    let str1 = 1;

    for (let i = 1; i <= n; i++) {
      let s = "";

      if (i == 1 || i === n) {
        for (let j = 1; j <= spc1; j++) {
          s = s + " ";
        }
        for (let j = 1; j <= str1; j++) {
          s = s + "*";
        }
      } else {
        for (let j = 1; j <= spc1; j++) {
          s = s + " ";
        }
        for (let j = 1; j <= str1; j++) {
          s = s + "*";
        }
        for (let j = 1; j <= spc2; j++) {
          s = s + "1";
        }
        for (let j = 1; j <= str1; j++) {
          s = s + "*";
        }
      }
      if (i <= n / 2) {
        spc1--;
        spc2 = spc2 + 2;
      } else {
        spc1++;
        spc2 = spc2 - 2;
      }

      console.log(s);
    }
  } catch (error) {
    console.log(error);
  }
}

pattern(num);
