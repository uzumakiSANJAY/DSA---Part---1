function pattern(num) {
  try {
    for (let i = 1; i <= num; i++) {
      let s = "";
      for (let j = 0; j < num; j++) {
        if (
          (i === 1 && j < Math.floor(num / 2) + 1) ||
          (i === num && j > Math.floor(num / 2) - 1) ||
          i === Math.floor(num / 2) + 1 ||
          j === Math.floor(num / 2) ||
          (i >= 1 && i <= num / 2 && j === num - 1) ||
          (i >= num / 2 && i <= num && j === 0)
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

pattern(n);
