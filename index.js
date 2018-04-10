#!/usr/bin/env node

const program = require('commander');
const prompt = require('prompt');

const { generateComponent } = require('./generate');

program
    .version('0.1.8')
    .description('Create Vue typescript components');

program
    .command('generate <name>')
    .alias('g')
    .description('Generate component')
    .action(name => {
        prompt.get([{
            name: 'comp_path',
            description: 'Path to components',
            type: 'string',
            required: true,
            default: 'resources/assets/js/components'
        }], (err, result) => {
            generateComponent(name, result.comp_path);
        })
    });

if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
    program.outputHelp();
    process.exit();
}
program.parse(process.argv);
