const fs=require('fs');

const path1 = 'E:\\Z+\\Node js\\Day1\\test-file\\file1.txt'
const path2 = 'E:\\Z+\\Node js\\Day1\\test-file\\file2.txt'
const path3 = 'E:\\Z+\\Node js\\Day1\\test-file\\file3.txt'


function readFileContent(filePath) {
    // Implementation
    try{
        var data=fs.readFileSync(filePath);

        console.log("Expected Output:"+ data);
    }catch(err){
        console.log("Error:"+err);
    }
   
}

readFileContent(path1)
readFileContent(path2)
readFileContent(path3)