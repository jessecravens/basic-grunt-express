
// javascriptEnabled defines whether to execute the script in the page or not (default to true)
// loadImages defines whether to load the inlined images or not
// localToRemoteUrlAccessEnabled defines whether local resource (e.g. from file) can access remote URLs or not (default to false)
// userAgent defines the user agent sent to server when the web page requests resources.
// userName sets the user name used for HTTP authentication
// password sets the password used for HTTP authentication
// XSSAuditingEnabled defines whether load requests should be monitored for cross-site scripting attempts (default to false)
// webSecurityEnabled defines whether web security should be enabled or not (default to `true)


// var page = require('webpage').create());
var page = new WebPage();

console.log("page.settings.javascriptEnabled: " + page.settings.javascriptEnabled);
console.log("page.settings.loadImages: " + page.settings.loadImages);
console.log("page.settings.localToRemoteUrlAccessEnabled: " + page.settings.localToRemoteUrlAccessEnabled);
console.log("page.settings.userAgent: " + page.settings.userAgent);
console.log("page.settings.userName: " + page.settings.userName);
console.log("page.settings.password: " + page.settings.password);
console.log("page.settings.XSSAuditingEnabled: " + page.settings.XSSAuditingEnabled);
console.log("page.settings.webSecurityEnabled: " + page.settings.webSecurityEnabled);