const path = require('path');

function resolvePath(relativePath){
    const absolutePath = path.resolve(process.cwd(),relativePath);

    console.log("Resolved Path :",absolutePath);
}

resolvePath('file.txt');
