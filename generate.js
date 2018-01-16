var path = require('path');
var fs = require('fs');
const { prompt } = require('inquirer');

const generateComponent = (name) => {
    let stubsPath = path.resolve(__dirname, 'stubs');

    let stubs = ['ts', 'vue', 'html', 'scss'];

    if (!fs.existsSync(name)) {
        fs.mkdirSync(name);
    }

    stubs.forEach(stub => {
        let stubPath = stubsPath + '/' + stub + '.stub';

        let newFile = name + '/' + name + '.' + stub;

        fs.readFile(stubPath, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            var result = data.replace(/\$name/g, name);

            fs.writeFile(newFile, result, 'utf8', function (err) {
                if (err) return console.log(err);
            });
        });

        console.info(stub + '-File was created.');
    });


    console.info('\x1b[32m', 'Vue component was created!', '\x1b[0m');

}

module.exports = { generateComponent };