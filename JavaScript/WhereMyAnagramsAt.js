// поиск анаграм со словом "word" в массиве "words"

function anagrams(word, words) {
let result = [];
//разбивка исходного слова на массив символов, сортировка и обратное преобразование в строку
let arrSample = word.split("").sort().toString();
  for (let i=0; i < words.length; i++) {
    if (word.length == words[i].length) {
    let arrCheck = words[i].split("").sort().toString();
      if (arrSample == arrCheck) {
      result.push(words[i]);
      }
    }
  }
return result;
}
