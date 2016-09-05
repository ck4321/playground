function strrev(str){
  if(str === ""){
   return str;
  }else{
   return strrev(str.slice(1)) + str.charAt(0);
  }
}

var str = process.argv[2];
console.log("reversed string " + strrev(str));


//to find reverse of a string 'chandru', first i need to find reverse of 'handru' and apped the first character from 'chandru', which is 'c'. Then to find reverse of 'handru', first find reverse of 'andru' and append first character 'h'. Continue this process unitl the base condition is met which is empty string
