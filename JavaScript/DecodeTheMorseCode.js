//на входе получаем строку кода Морзе из символов "-" " " и ".", меджу буквами по 3 пробела. На выход выводим символы которые получились.

decodeMorse = function(morseCode){
  let result = "";
  // объект с таблицей Морзе и пробелом
  const morse = { 
			" " : " ",
			"A" : ".-",
			"B" : "-...",
			"C" : "-.-.",
			"D" : "-..",
			"E" : ".",
			"F" : "..-.",
			"G" : "--.",
			"H" : "....",
			"I" : "..",
			"J" : ".---",
			"K" : "-.-",
			"L" : ".-..",
			"M" : "--",
			"N" : "-.",
			"O" : "---",
			"P" : ".--.",
			"Q" : "--.-",
			"R" : ".-.",
			"S" : "...",
			"T" : "-",
			"U" : "..-",
			"V" : "...-",
			"W" : ".--",
			"X" : "-..-",
			"Y" : "-.--",
			"Z" : "--..",
			"1" : ".----",
			"2" : "..---",
			"3" : "...--",
			"4" : "....-",
			"5" : ".....",
			"6" : "-....",
			"7" : "--...",
			"8" : "---..",
			"9" : "----.",
			"0" : "-----",
    	"SOS" : "...---...",
      "!" : "-.-.--",
      "." : ".-.-.-"
	}
  // сначала удаляем лишние пробелы
var letters = morseCode.split(" ");
  for (let i=0; i < letters.length; i++) {
    if (letters[i]) {	
	  letters.splice(0,i-1);
    break;
	  }
  }
for (let i=letters.length; i > 0; i--) {
  if (letters[i]) { 
  letters.splice(i+1,letters.length);
  break;
	}
}
  for (let i=0; i < letters.length; i++) {
    if (letters[i] === "" && letters[i+1] === "" && letters[i+2] !== "") {
    letters.splice(i,1);
	  letters[i] = " ";
	  }
	  else if (letters[i] === "") {
	  letters.splice(i,1);
	  }
  }
  //заменяем код Морзе на буквы
  for (let i=0; i < letters.length; i++) {
	  result = result + getKeyByValue(morse,letters[i]);
  }
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
return result;
}
