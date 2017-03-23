var crypto = require('crypto-js');

//infomation to encrypt
var secretMessage = 'I hid the chips under the couch';

//enc key
var secretKey = 'i9wh3wuhd8';

var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);

console.log('encrypted message', encryptedMessage.toString() );
