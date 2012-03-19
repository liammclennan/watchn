Watchn
======

A basic recursive file system watcher for node.js. 

To use specify:

 * a starting directory
 * a regular expression that matches the files to watch
 * a function to call when a match is detected

Eg
--
 	var exec = require('child_process').exec,
		watch = require('watchn').watch;

    watch('.', /.+\.js/, function (path, curr, prev) {
  		console.log('change detected... ' + path);
  		exec('cat ' + path, function (error, stdout, stderr) {
    		console.log(stdout);
  		});
	}); 

Acknowledgement
---------------

The functionality of this project is a ripoff of watchr. The code is largely stolen from [node-supervisor](https://github.com/isaacs/node-supervisor)
