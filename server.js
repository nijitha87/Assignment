var express = require('express');

var app = express();

var module1 = require('./modules/module1/Module1');
var module3 = require('./modules/module3/Module3');

/**
  * This function used to add feed string and the positions to be extracted for
    formatting and type of formatting and return the output.
  * @param string - String that holds the feed string.
  * @param positionArray - Array which holds start and end position of substring to be formatted and its type.
*/
function feeds(string, positionArray) {
	var feedString = new module1();
	feedString.addFeed(string,positionArray);
	return feedString.getFeed();
}

/**
  * This function used to format the string from module 1 as per module 2 output.
  * @param inputString - module 1 output string.
  * @param inputFeedObject - module 2 output array which holds start and end position of substring to be formatted and its type.
*/
function getFormattedString(inputString, inputFeedObject) {
	var moduleFormatter = new module3();
	var formattedStringOutput = moduleFormatter.getFormattedString(inputString, inputFeedObject);
	console.log("'" + inputString + "'" + " is formatted as: ");
	console.log(formattedStringOutput);
}

/**
  * This function used to initialise data and get outputs from module 1 and 2.
  * @method feeds - returns module 1 and module 2 output.
  * @method getFormattedString - format the string input
*/
function initialize() {
	console.log('\n');
	/*First example */
	let string = "Obama visited Facebook headquarters: http://bit.ly/xyz @elversatile";
	let positionArray = [[14,22,'Enity'],[0,5,'Enity'],[55,67,'Twitter username'],[37, 54, 'Link']];
	var module3Input = feeds(string, positionArray);
	getFormattedString(module3Input.module1Output, module3Input.module2Output);
	console.log('\n');
	/*Second Example */
	string = "10 Ultimate Usability Guidelines for Web Designers - http://bit.ly/NgDS0g @dynamic";
	positionArray = [[37,50,'Enity'],[74,82,'Twitter username'],[53, 73, 'Link']];
	module3Input = feeds(string, positionArray);
	getFormattedString(module3Input.module1Output, module3Input.module2Output);
}

initialize();
app.listen(8080);

module.exports = app;