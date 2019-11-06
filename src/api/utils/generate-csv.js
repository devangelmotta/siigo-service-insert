
var fs = require('fs');
const path = require("path")
const pathFile = `${path.dirname(__dirname)}/test.csv`;
var count = 0;



function generateCsv() {

    while (count < 1000) {

        dataToWrite = {
            name: `NameTest-${count}`,
            description: `DescriptionTest-${count}`,
            price: `PriceTest-${count}`,
        }
        fs.writeFile(pathFile, dataToWrite, 'utf8', function (err) {
            if (err) {
                console.log('Some error occured - file either not saved or corrupted file saved.');
            } else {
                console.log('It\'s saved!');
            }
        });
        count++;
    }
    console.log("SCV Generated!");
}

module.exports = generateCsv;