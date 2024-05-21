let num = 4;
function pattern(n) {
  try {
    let count = 1;
    let r = 1;
    for (let i = 1; i <= n; i++) {
      let s = "";
      for (let j = 0; j < r; j++) {
        s = s + " " + count;
        count++;
      }
      r++;
      console.log(s);
    }
  } catch (error) {
    console.log(error);
  }
}

pattern(num);
