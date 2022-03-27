const c = require("crypto-js");

const output = "This is the correct output";
console.log("output should say 'This is the correct output':  ", output);

const encryptedOutput = c.AES.encrypt(output, "foo").toString();
console.log("now we apply the crypto...:  ", encryptedOutput);

let decryptedBytes = c.AES.decrypt(encryptedOutput, "foo");
const decryptedOutput = decryptedBytes.toString(c.enc.Utf8);
console.log("now we decrypt the string...:  ", decryptedOutput);
