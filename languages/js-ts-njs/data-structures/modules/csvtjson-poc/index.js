const csvFilePath='advertising.csv'
const csv=require('csvtojson')
let csvData = [] // parsed Data
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    csvData.push(jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
    console.log(csvData);
})