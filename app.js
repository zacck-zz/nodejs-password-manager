console.log('starting password manager');

var storage = require('node-persist');
//initialize storage
storage.initSync();


//save
//key , value
//storage.setItemSync('name', 'Zacck');

//get from storage
var name = storage.getItemSync('name');

console.log('saved name is', name);
