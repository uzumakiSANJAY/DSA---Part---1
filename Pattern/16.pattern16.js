function pattern(num) {
  try {
    let space = num / 2;
    let star = 1;
    let count = 1;
    for (let i = 1; i <= num; i++) {
      let s = "";

      for (let j = 1; j <= space; j++) {
        s = s + " ";
      }
      let cVal = count;
      for (let k = 1; k <= star; k++) {
        s = s + cVal;
        if (k <= star / 2) {
          cVal++;
        } else {
          cVal--;
        }
      }
      if (i <= Math.floor(n / 2)) {
        star = star + 2;
        count++;
        space--;
      } else {
        star = star - 2;
        count--;
        space++;
      }
      console.log(s);
    }
  } catch (error) {
    console.log(error);
  }
}
let n = 5;

pattern(n);
