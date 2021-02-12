//This is a nodejs script, and requires the following npm packages to run:
//jssha, btoa and command-line-args

//WARNING - Token generation should NEVER be done client side (in a browser for
//example), because then you are exposing your developer key to customers
/*jshint esversion: 6 */

const jsSHA = require('jssha');
const btoa = require('btoa');

function generateToken(key, appID, userName, expiresInSeconds, vCard = '') {
    var EPOCH_SECONDS = 62167219200;
    var expires = Math.floor(Date.now() / 1000) + expiresInSeconds + EPOCH_SECONDS;
    var shaObj = new jsSHA("SHA-384", "TEXT");
    shaObj.setHMACKey(key, "TEXT");
    jid = userName + '@' + appID;
    var body = 'provision' + '\x00' + jid + '\x00' + expires + '\x00' + vCard;
    shaObj.update(body);
    var mac = shaObj.getHMAC("HEX");
    var serialized = body + '\0' + mac;
    console.log("\nGenerated Token: \n" + btoa(serialized));
}

//Date is in the format: "October 13, 2014 11:13:00"
function generateTokenExpiresOnDate(key, appID, userName, date) {
    var currentDate = new Date(date);
    var dateInSeconds = Math.floor(currentDate.valueOf() / 1000);
    var nowInSeconds = Math.floor(Date.now() / 1000);
    if (dateInSeconds < nowInSeconds) {
        console.log("Date is before current time, so token will be invalid");
        expiresInSeconds = 0;
    } else {
        expiresInSeconds = dateInSeconds - nowInSeconds;
        console.log("Expires in seconds: " + expiresInSeconds);
    }
    generateToken(key, appID, userName, expiresInSeconds);
}

module.exports = { generateToken, generateTokenExpiresOnDate };