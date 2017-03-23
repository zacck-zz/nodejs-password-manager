console.log('starting password manager');

//add a few commands
var argv = require('yargs')
    .command('create', 'creates a new account', function(yargs){
      //require a param
      yargs.options({
        name: {
          demand: true, //makes sure this param is provided
          alias: 'n', // this is a shorter version for name when typing long commands
          description: 'The Account name goes here',
          type: 'string'
        },
        username: {
          demand: true,
          alias: 'u',
          description: 'Your last username goes here',
          type: 'string'
        },
        password: {
          demand: true,
          alias: 'p',
          description: 'Your password goes here',
          type:'string'
        }
      }).help('help')
    })
    .command('get', 'gets the account needed', function(yargs){
      yargs.options({
        name: {
          demand: true,
          alias: 'n',
          description: 'The Account Name goes here',
          type: 'string'
        }
      })
    })
    .help('help') // enable help
    .argv;
var command = argv._[0];


var storage = require('node-persist');
//initialize storage
storage.initSync();




//this is used to make a new account
//name string github
//username  user123
//password pwd232
//in account
function createAccount(account) {
    if(account.name != undefined && account.username != undefined && account.password != undefined) {
      //lets get an accounts array
      var accounts = storage.getItemSync('accounts');
      if(typeof(accounts) === 'undefined'){
        accounts = [];
      }
      //save the account
      accounts.push(account)
      //remember to save account to machine
      storage.setItemSync('accounts', accounts);
      console.log(`${account.name} account saved!`)
    } else {
      //alert the user of an error
      console.log('please ensure to provide an account name, username and password');
    }
}

function getAccount(accountName) {
  var accounts = storage.getItemSync('accounts');
  //lets fimd the account with the names
  return accounts.find((acc) => {
    return accountName == acc.name
  });
}

function deleteAccount(accountName) {
  var accounts = storage.getItemSync('accounts');
  //lets fimd the account with the names
  var filteredAccounts = accounts.filter((acc) => {
    return accountName != acc.name;
  });
  console.log(`${accountName} deleted!`);
  return storage.setItemSync('accounts', filteredAccounts);
}

if(command === 'create') {
  createAccount({
    name: argv.name,
    username: argv.username,
    password: argv.password
  });
} else if (command =='get') {
  var accname = argv.name
  console.log(getAccount(accname));
}

// createAccount({
//    name: 'whatsapp',
//    username: 'superbike_z',
//    password: 'hahahehe343'
//  });
//
//  createAccount({
//    name: 'whatsappy',
//    username: 'superbike_z',
//    password: 'hahahehe343'
//  })


//console.log('WhatsApp Account', getAccount('whatsapp'));

//console.log('accounts', storage.getItemSync('accounts'));

//deleteAccount('gerry');

//console.log('accounts', storage.getItemSync('accounts'));
