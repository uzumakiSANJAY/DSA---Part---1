// function pattern(num) {
//   try {
//     let space = 0;
//     let star = num;
//     let upStar = 1;
//     let mSpace = Math.floor(num / 2);
//     for (let i = 1; i <= num; i++) {
//       let s = "";
//       if (i === 1 || i > Math.floor(n / 2)) {
//         for (let j = 1; j <= space; j++) {
//           s = s + " ";
//         }
//         for (let j = 1; j <= star; j++) {
//           s = s + "*";
//         }
//       } else {
//         for (let j = 1; j <= space; j++) {
//           s = s + " ";
//         }
//         for (let j = 1; j <= upStar; j++) {
//           s = s + "*";
//         }
//         for (let j = 1; j <= mSpace; j++) {
//           s = s + " ";
//         }
//         for (let j = 1; j <= upStar; j++) {
//           s = s + "*";
//         }
//         mSpace = mSpace - 2;
//       }

//       if (i < Math.floor(n / 2) + 1) {
//         space++;
//         star = star - 2;
//       } else {
//         space--;
//         star = star + 2;
//       }

//       console.log(s);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

function altPattern(num) {
  try {
    let space = 0;
    let star = num;

    for (let i = 1; i <= num; i++) {
      let s = "";

      for (let j = 1; j <= space; j++) {
        s = s + " ";
      }
      for (let j = 1; j <= star; j++) {
        if (i > 1 && i <= n / 2 && j > 1 && j < star) {
          s = s + " ";
        } else {
          s = s + "*";
        }
      }

      if (i < Math.floor(n / 2) + 1) {
        space++;
        star = star - 2;
      } else {
        space--;
        star = star + 2;
      }

      console.log(s);
    }
  } catch (error) {
    console.log(error);
  }
}

let n = 7;

altPattern(n);
