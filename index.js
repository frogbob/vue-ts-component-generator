const program = require('commander');

const { generateComponent } = require('./generate');

program
    .version('0.1.0')
    .description('Create Vue typescript components');

program
    .command('vue:component <name>')
    .alias('g')
    .description('Generate component')
    .action((name, ) => {
        generateComponent(name);
    });

if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
    program.outputHelp();
    process.exit();
}
program.parse(process.argv);