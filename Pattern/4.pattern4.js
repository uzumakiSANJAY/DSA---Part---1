let num = 5;

function pattern1(n) {
  try {
    let count = n;
    let space = 0;
    for (let i = 0; i < n; i++) {
      let str = "";
      for (let j = 0; j < space; j++) {
        str = str + " ";
      }
      for (let k = space; k < n; k++) {
        str = str + "*";
      }
      space++;
      count--;
      console.log(str);
    }
  } catch (error) {
    console.log(error);
  }
}

pattern1(num);
