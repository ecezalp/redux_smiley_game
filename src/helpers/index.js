// helper contents in order: 

// getBinary: transform int to binary string
// shuffle: array shuffle function
// numConverter: transform grid coordinates into array placement

export function getBinary(num) {
  var a = [];
  for (var i = 7; i >= 0; i -= 1) {
    a.push((num >> i) % 2);
  }
  return a.join("");
}

export function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

export function numConverter(x, y) {
  num = (y * 16) + x
  return num
}
