var crypto = require('crypto-js');

//infomation to encrypt
var secretMessage = {
  name: 'Zacck',
  secretName: '007'
};

//enc key
var secretKey = 'i9wh3wuhd8';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);

console.log('encrypted message', encryptedMessage.toString());


//decrypting

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);

var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log('Decrypted Message:', typeof decryptedMessage, decryptedMessage)
