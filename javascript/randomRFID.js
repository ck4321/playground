var TEST_COUNT = 100000;
var generatedStrings = [];

function randomAlphaNumeric(){
  return Math.random().toString(36).slice(2,20).toUpperCase();
}

var i = 0;
//for (var i = 0; i < TEST_COUNT; i++){
while(true){
  var randomStr = randomAlphaNumeric();

  if(generatedStrings.indexOf(randomStr) < 0){
    console.log(randomStr + " index = " + i);
    generatedStrings.push(randomStr);
  }else{
    console.error("duplicate found at index " + i);
    process.exit();
 }
 i++;
}
