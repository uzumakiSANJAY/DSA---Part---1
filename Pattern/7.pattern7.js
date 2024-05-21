let num = 101;
function pattern(n) {
  try {
    let str = n / 2 + 1;
    let space = 1;
    for (let i = 1; i <= n; i++) {
      let sp = "";
      for (let j = 1; j <= str; j++) {
        sp = sp + "*";
      }
      for (let j = 1; j <= space; j++) {
        sp = sp + " ";
      }
      for (let j = 1; j <= str; j++) {
        sp = sp + "*";
      }
      if (i <= n / 2) {
        str--;
        space += 2;
      } else {
        str++;
        space -= 2;
      }
      console.log(sp);
    }
  } catch (error) {
    console.log(error);
  }
}

pattern(num);
