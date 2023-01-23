var fs = require('fs'); // filesystem module
let http = require('http');

// w3school -> https://www.w3schools.com/nodejs/nodejs_filesystem.asp

http.createServer(function (req,res){
    // Read File

    // fs.readFile('index.html', function(err, data){
    //     if (error)
    //         throw err;
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    // });

    // AppendFile

    // fs.appendFile('append.txt', 'This appends specified content to a file. If the file does not exist, the file  wiil be created.', function(err){
    //     if (err)
    //         throw err;
    // });

    // Delete Files -> to delete specified file

    // fs.unlink('append.txt', function(err){
    //     if(err) throw err;
    //     console.log("File Delete")
    // });


}).listen(8080);

