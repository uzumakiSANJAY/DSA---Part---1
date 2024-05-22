function pattern(num) {
  try {
    let star = 1;
    let space = 2 * num - 3;

    for (let i = 1; i <= num; i++) {
      let s = "";
      let val = 1;
      for (let j = 1; j <= star; j++) {
        s = s + val;
        val++;
      }
      for (let j = 1; j <= space; j++) {
        s = s + " ";
      }
      if (i === num) {
        star--;
        val--;
      }
      for (let j = 1; j <= star; j++) {
        val--;
        s = s + val;
      }

      space = space - 2;
      star++;

      console.log(s);
    }
  } catch (error) {
    console.log(error);
  }
}

let num = 4;
pattern(num);
