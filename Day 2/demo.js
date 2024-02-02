const fs=require('fs');


function writeToFile(filePath, content) {
    // Implementation
    try{
        fs.writeFileSync(filePath,content);
        console.log("Data written to file1.txt")
    }catch(err){
        console.log("Error:" + err);
    }
}


writeToFile('file1.txt',"Sample content");
writeToFile('demo//file2.txt',"Sample content.");