console.log('starting password manager');

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


console.log('WhatsApp Account', getAccount('whatsapp'));

console.log('accounts', storage.getItemSync('accounts'));

//deleteAccount('gerry');

//console.log('accounts', storage.getItemSync('accounts'));
