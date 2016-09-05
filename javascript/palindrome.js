function pal(str){
  if(str === "" || str.length === 1){
   return true;
  }else{
   if(str.charAt(0) === str.charAt(str.length-1)){
      return pal(str.slice(1, -1));
   }
  }
  return false;
}

var str = process.argv[2];
console.log("Is palindrome = " + pal(str));


//to find reverse of a string 'chandru', first i need to find reverse of 'handru' and apped the first character from 'chandru', which is 'c'. Then to find reverse of 'handru', first find reverse of 'andru' and append first character 'h'. Continue this process unitl the base condition is met which is empty string
