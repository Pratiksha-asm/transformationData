const data = require('./input.json');
const fs = require("fs");
console.log( 'input', data )

// Transformation function
transformData(data)

// Transformation function which will convert input to output format.
function transformData(data){
  console.info('started processing');
  console.log(Object.keys(data),"this is data lenght");
  

  // for(i=0;i<=)
  for (key in data) {
    console.log(key)
    for (index in data[key] ){
      var data1={}
    console.log(index,"this value or number");
      console.log(index, data[key] [index])
      input =  data[key] [index]
    //   var value=input[key] [index];
    //   var value1= Object.values(value);
    // console.log(value1,"this is array")
    // for(i=0;i < value1.length;i++){
    // console.log(typeof value1[i],"at index value");
    // if(typeof value1[i] == "object"){
    //   otherloop(data)
    // }
    
  }
      saveOutput(data1);
    }
  }


  // Call this once we are ready with output format
  // saveOutput(data)

// function otherloop(data1){ 
//   console.log(data1,"this is full data");
//   for (key in input) {
//     console.log(key)
//     for (index in input[key] ){
//     console.log(index,"this value or number");
//       console.log(index, input[key] [index])
//       output[JSON.stringify(index)] =  input[key] [index]
//     }
//   }
// }

function saveOutput(data) {
  fs.writeFile("output.json", JSON.stringify(data), function(res){
    console.log('done')
  });
}
