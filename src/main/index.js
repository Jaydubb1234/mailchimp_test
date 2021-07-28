const fs = require('fs');
const getHtmlLines = require('./service.js');
module.exports = function(file){
    try {
        // read contents of the file
        const data = file || fs.readFileSync(process.argv[1] || 'src/test/examples/example1.md' , 'UTF-8');

        // split the contents by new line
        const lines = data.split(/\r?\n/);

        return  getHtmlLines(lines);
    } catch (err) {
        console.log('Error: ',err);
        return err;
    }

};