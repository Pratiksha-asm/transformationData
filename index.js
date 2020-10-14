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
      console.log(index, data[key] [index],"this is") // outer array object
      var value=data[key] [index];
     var value1= Object.values(value);
     for(i=0;i < value1.length;i++){
     if(typeof value1[i] == "object"){
     for (j in value1[i]){
     console.log( data1=j,value1[i] [j] ,"this is indxex") //inner array object
       data1[JSON.stringify(j)] = value1[i] [j]
     } 
     }
    }
  }
      saveOutput(data1);
    }
  }


  // Call this once we are ready with output format
  // saveOutput(data)

function saveOutput(data) {
  fs.writeFile("output.json", JSON.stringify(data), function(res){
    console.log('done')
  });
}
