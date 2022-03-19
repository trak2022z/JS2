//https://www.codestepbystep.com/problem/view/javascript/strings/repeat
console.log(repeat("echo...", 3));

function repeat(str, num) {
    let s ='';
    if (num == 0) {
      return '';
      }
    else {
        for (i = 0; i < num; i++)
            s += str;
        return s;
    }
}


//https://www.codestepbystep.com/problem/view/javascript/arrays/average
let nums = [-1, 3.0, 12, 15, -4, 1, -12.5, 1, 8];
console.log(average(nums));

function average(tab) {
let av,sum = 0;
    
for (let i = 0; i < tab.length; i++) {
sum += tab[i];
}
return sum/tab.length;
}



//https://www.codestepbystep.com/problem/view/javascript/parameters/isPrimeNumber
console.log(isPrimeNumber(120));

function isPrimeNumber(num) {

  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {

      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false;
      }
    }
  } else {
    return false;
  }

}
