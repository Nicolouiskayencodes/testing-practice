export function capitalize(string){
  let capital = string[0].toUpperCase();
  return capital + string.slice(1);
}

export function reverseString(string){
 let split = string.split('');
 let reverse = ''
 for (let i=0; i<split.length; i++){
  reverse += split[split.length-1-i]
 }
 return reverse
}

export let calculator = {
  add(a,b){
    return a+b;
  },
  subtract(a,b){
    return a-b;
  },
  multiply(a,b){
    return a*b;
  },
  divide(a,b){
    return a/b;
  }
}

export function caesarCipher(string) {
  let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let split = string.split('');
  let newString = ''
  split.forEach(character => {
    if (lowerCase.includes(character)){
      let index = lowerCase.indexOf(character) + 3;
      if (index > lowerCase.length-1) {
        index = index - lowerCase.length;
      }
      newString += lowerCase[index];
    } else if (upperCase.includes(character)){
      let index = upperCase.indexOf(character) + 3;
      if (index > upperCase.length-1) {
        index = index - upperCase.length;
      }
      newString += upperCase[index];
  } else {
    newString += character;
  }
});
  return newString;
}

export function analyzeArray(array) {

}