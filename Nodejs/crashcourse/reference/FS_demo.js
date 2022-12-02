const fs = require("fs");
const path = require("path");

// // make directory
// fs.mkdir(path.join(__dirname,'/test'),{},err=>{

//     if(err) throw err;
//     console.log("folder created...")
// })

// create and write to file
// fs.writeFile(path.join(__dirname,'/test','hello.txt')
// ,'hello world',
// err=>{

//     if(err) throw err;
//     console.log("file written...")
// })

// append to a file
// fs.appendFile(path.join(__dirname,'/test','hello.txt')
// ,'this is siraj',

// err=>{

//     if(err) throw err;
//     console.log("file written...")
// })

//write and append at same time
// fs.writeFile(path.join(__dirname,'/test','hello.txt')
// ,'hello world',
// err=>{

//     if(err) throw err;
//     console.log("file written...")

//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),
//     "get the fuck out of here",
//     err=>{
//         if(err) throw err;
//         console.log("file is appended")
//     })

// })

// read the file
// fs.readFile(path.join(__dirname,'/test','hello.txt'),
// 'utf8',
// (err,data)=>
// {
//     if(err) throw err;
//     console.log(data);
// }
// )

// Rename file
fs.rename(path.join(__dirname,'/test','hello.txt'),
path.join(__dirname,'/test','hellofuck.txt'),
err=>{
    if(err) throw err;
    console.log("file renamed");
})
