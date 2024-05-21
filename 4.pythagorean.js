let a = 4;
let b = 3;
let c = 5;

function highestNumber(a, b, c) {
  try {
    let h = a;
    if (a > b && a > c) {
      h = a;
      return { h: h, a: b, b: c };
    } else if (b > a && b > c) {
      h = b;
      return { h: h, a: a, b: c };
    } else {
      h = c;
      return { h: h, a: b, b: a };
    }
  } catch (error) {
    console.log(error);
  }
}

function pythagoreanTrip(a, b, c) {
  try {
    let e = highestNumber(a, b, c);
    if (e.h * e.h === e.a * e.a + e.b * e.b) {
      console.log(true);
    } else {
      console.log(false);
    }
  } catch (error) {
    console.log(error);
  }
}
pythagoreanTrip(a, b, c);
