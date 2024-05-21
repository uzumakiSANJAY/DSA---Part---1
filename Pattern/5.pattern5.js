let num = 7;

function pattern1(n) {
  try {
    let sp1 = n / 2;
    let str1 = 1;

    for (let i = 1; i <= n; i++) {
      let sp = "";
      for (let j = 1; j <= sp1; j++) {
        sp = sp + " ";
      }
      for (let j = 1; j <= str1; j++) {
        sp = sp + "*";
      }
      if (i < n / 2) {
        sp1--;
        str1 += 2;
      } else {
        sp1++;
        str1 -= 2;
      }

      console.log(sp);
    }
  } catch (error) {
    console.log(error);
  }
}

pattern1(num);
