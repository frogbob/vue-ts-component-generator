#!/usr/bin/env node

const program = require('commander');

const { generateComponent } = require('./generate');

program
    .version('0.1.5')
    .description('Create Vue typescript components');

program
    .command('generate <name>')
    .alias('g')
    .description('Generate component')
    .action(name => {
        generateComponent(name);
    });

if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
    program.outputHelp();
    process.exit();
}
program.parse(process.argv);
