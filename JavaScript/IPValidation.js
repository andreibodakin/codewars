//проверка - является ли введенная строка валидным  IP адресом

function isValidIP(str) {
  var possible_symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  let numbers = str.split(".");
  let symbols = str.split("");
  //должно быть 4 числа
  if (numbers.length != 4) {return false;}
  //проверка, что адрес не начинается, или не заканчивался на "."
  else if (str.charAt(0) == "." || str.charAt(str.length - 1) == ".") {return false;}
    for (let i=0; i < symbols.length; i++) {
    //проверка что все симовлы - это цифры, или точки
    if (!possible_symbols.includes(symbols[i]) && symbols[i] != ".") {return false;}
    //проверка что нет двух точек подряд
    else if (symbols[i] == "." && symbols[i+1] == ".") {return false;}
    }
    for (let i=0; i < 4; i++) {
    //провека что номер не начинается с "0"
    if (numbers[i].length > 1 && numbers[i].charAt(0) == "0") {return false;}
    //провека что каждый номер в диапозоне 0 - 255
    else if (+numbers[i] < 0 || +numbers[i] > 255) {return false;}
    }
 return true;
}
