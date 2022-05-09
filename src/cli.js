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
    builder: (args) => {
      return args
        .option("age", {
            alias: "a",
            type: "number",
            describe: "age",
            demandOption: true,
        })
    },
    handler: (argv) => {
      console.log(`I am ${argv.name}!! I am ${argv.age} old.`)
    }
  })
  .argv
