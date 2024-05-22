function practice(num) {
  try {
    for (let i = 1; i <= num; i++) {
      let s = "";
      for (let j = 1; j <= num; j++) {
        if (
          j === 1 ||
          j === num ||
          (i > Math.floor(num / 2) && (i === j || i + j === num + 1))
        ) {
          s = s + "*";
        } else {
          s = s + " ";
        }
        s = s + " ";
      }

      console.log(s);
    }
  } catch (error) {
    console.log(error);
  }
}

let n = 5;

practice(n);
