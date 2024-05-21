let num = 5;
function pattern(n) {
  try {
    let str = 1;
    let spc = 0;
    for (let i = 1; i <= n; i++) {
      let sp = "";
      for (let j = 1; j <= spc; j++) {
        sp = sp + " ";
      }
      for (let k = 1; k <= str; k++) {
        sp = sp + "*";
      }
      spc++;
      console.log(sp);
    }
  } catch (error) {
    console.log(error);
  }
}

pattern(num);
