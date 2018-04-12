var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');

const generateComponent = (name, comp_path) => {
  let stubsPath = path.resolve(__dirname, 'stubs');

  let stubs = ['ts', 'vue', 'html', 'scss'];

  // Slugify component-name (for component-folder)
  var slug = name.replace(/[A-Z]/g, "-$&").toLowerCase();
  slug = (slug.length && slug[0] == '-') ? slug.slice(1) : slug;

  // Define component-folder
  let cp = comp_path + '/' + slug;

  // Create component-folder to given path
  mkdirp(cp, (err) => {
    if (err) {
      console.error(err)
    } else {
      // Generate each Stub
      stubs.forEach(stub => {
        let stubPath = stubsPath + '/' + stub + '.stub';

        let newFile = cp + '/' + name + '.' + stub;

        fs.readFile(stubPath, 'utf8', (err, data) => {
          if (err) {
            return console.log(err);
          }
          var result = data.replace(/\$name/g, name);
          result = result.replace(/\$slug/g, slug);

          fs.writeFile(newFile, result, 'utf8', (err) => {
            if (err) return console.log(err);
          });
        });

        console.info(stub + '-File was created.');
      });

      console.info('\x1b[32m', 'Vue component was created!', '\x1b[0m');

    }
  });

}

module.exports = { generateComponent };
