const { google } = require("googleapis");
const config = require("../config");

const oauth2Client = new google.auth.OAuth2(
    config.google.clientId,
    config.google.secret,
    config.google.redirectUrl
  );
  
module.exports = oauth2Client