let num = 5;

function pattern1(n) {
  try {
    let count = 1;
    for (let i = 0; i < n; i++) {
      let str = "";
      for (let j = 0; j < count; j++) {
        str = str + "*";
      }
      count++;
      console.log(str);
    }
  } catch (error) {
    console.log(error);
  }
}

pattern1(num);
