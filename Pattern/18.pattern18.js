function practice(num) {
  try {
    let space = Math.floor(num / 2) + 1;
    let star = 1;
    for (let i = 1; i <= num; i++) {
      let s = "";
      if (i === Math.floor(num / 2) + 1) {
        for (let j = 1; j <= space; j++) {
          s = s + "*";
        }
      } else {
        for (let j = 1; j <= space; j++) {
          s = s + " ";
        }
      }

      for (let j = 1; j <= star; j++) {
        s = s + "*";
      }
      if (i < n / 2) {
        star++;
      } else {
        star--;
      }
      console.log(s);
    }
  } catch (error) {
    console.log(error);
  }
}

let n = 9;

practice(n);
