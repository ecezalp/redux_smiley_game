// helper contents in order: 

// getBinary: transform int to binary string
// shuffle: array shuffle function
// numConverter: transform grid coordinates into array placement
// buttonHelper: array containing button names that correspond to smiley titles in binary

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

export const buttonHelperEnglish = ["Color", "Eyebrows", "Glasses", "Moustache", "Beard", "Hat", "Tongue", "Piercing"]

export const buttonHelperTurkish = ["Renk", "Kaş", "Gözlük", "Bıyık", "Sakal", "Şapka", "Dil", "Küpe"]