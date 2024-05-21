let num = 5;
function pattern(n) {
  try {
    for (let i = 1; i <= n; i++) {
      let s = "";
      for (let j = 1; j <= n; j++) {
        if (i == j || i + j == n + 1) {
          s = s + "*";
        } else {
          s = s + " ";
        }
      }

      console.log(s);
    }
  } catch (error) {
    console.log(error);
  }
}

pattern(num);
