var argv = require('yargs')
    .command('hello', 'greets the user', function(yargs){
      //require a param
      yargs.options({
        name: {
          demand: true, //makes sure this param is provided
          alias: 'n', // this is a shorter version for name when typing long commands
          description: 'Your first name goes here'
          type: 'string'
        },
        lastname: {
          demand: true,
          alias: 'l',
          description: 'Your last name goes here',
          type: 'string'
        }
      }).help('help')
    })
    .help('help') // enable help
    .argv;


//check if name is specified
var command = argv._[0];

console.log(argv);
if(command === 'hello' && typeof(argv.name) != 'undefined' && typeof(argv.lastname) != 'undefined'){
  console.log(`Hello ${argv.name} ${argv.lastname}`);
} else if(command === 'hello' && typeof(argv.name) != 'undefined'){
  console.log(`Hello ${argv.name}!`);
} else if (command === 'hello') {
  console.log('Hello World');
}
