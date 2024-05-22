function practice(num) {
  try {
    for (let i = 1; i <= num; i++) {
      let s = "";
      for (let j = 0; j < num; j++) {
        s = s + "*";
      }
      console.log(s);
    }
  } catch (error) {
    console.log(error);
  }
}

let n = 5;

practice(n);
