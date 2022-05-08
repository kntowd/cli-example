#!/usr/bin/env node

const yargs = require('yargs/yargs')

yargs(process.argv.slice(2))
  .command({
    command: "hello",
    handler: (argv) => {
      console.log('hello world!!');
    }
  })
  .command({
    command: "self-introduction <name>",
    handler: (argv) => {
      console.log(`I am ${argv.name}`)
    }
  })
  .argv
