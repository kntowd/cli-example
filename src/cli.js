#!/usr/bin/env node

const yargs = require('yargs/yargs')

yargs(process.argv.slice(2))
  .command({
    command: "hello",
    handler: () => {
      console.log('hello world!!');
    }
  })
  .command({
    command: "self-introduction <name>",
    builder: (yargs) => {
      yargs.option('age',{
        alias: 'a',
        demandOption: true,
      })
    },
    handler: (argv) => {
      console.log(`I am ${argv.name}!! I am ${argv.age} old.`)
    }
  })
  .argv
