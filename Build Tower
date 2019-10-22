//построение башни из "*" с заданным количеством этажей

function towerBuilder(nFloors) {
  let arr = [];
  let a = " ";
  let b = "*";
    if (nFloors == 1) {
    arr = ["*"];
    return arr;
    }
  else 
    for (let i=1; i < nFloors+1; i++) {
    arr[i-1] = a.repeat(nFloors-i) + b.repeat((i*2)-1) + a.repeat(nFloors-i);
    }
  return arr;
}
