
var crux = require('node-crux');
var app = crux.app; 
crux.globalize(); 
app
 .path(__dirname)
 .projectConfig('config/_project.json')
 .envConfig('config/', 'json')
 .components(["log","static"], true);

app.init();
app.run(function() {

});
