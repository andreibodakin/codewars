// на входе принимаем строку из скобок "()[]{}" и проверяем все ли скобки закрыты правильно

function validBraces(braces){
  // создаем проверочный массив куда будем добалять активные скобки и удалять закрытые пары скобок
  let active = [];
  let check = braces.split("");
    for (let i=0; i < check.length; i++) {
    if (check[i] == "(") {active.push("(");}
      else if (check[i] == "{") {active.push("{");}
      else if (check[i] == "[") {active.push("[");}
      else if (check[i] == ")") { 
        if (active.pop() !== "(") {return false;}
        }
      else if (check[i] == "}") {  
        if (active.pop() !== "{") {
        return false;}
        }
      else if (check[i] == "]") {  
        if (active.pop() !== "[") {
        return false;}
        }
   }
  // если проверочный массив пуст - все скобки закрыты
  if (active.length == 0) {return true;}
  else {return false;}
}
