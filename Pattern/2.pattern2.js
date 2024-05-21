let num = 5;

function pattern2(n) {
  try {
    let count = n;
    for (let i = 0; i < n; i++) {
      let str = "";
      for (let j = 0; j < count; j++) {
        str = str + "*";
      }
      count--;
      console.log(str);
    }
  } catch (error) {
    console.log(error);
  }
}

pattern2(num);
