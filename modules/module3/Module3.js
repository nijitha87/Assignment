var enitityFormatter = require('./htmlFormatters/EntityFormatter');
var linkFormatter = require('./htmlFormatters/LinkFormatter');
var userNameFormatter = require('./htmlFormatters/TwitterUsernameFormatter');

/**
  * This class is to store module 3 data and functions
 */
class Module3 {
	constructor() {
		this.formattedString = "";
	}

	/**
	  * This function is to sort feed Object position array wrt attribute startPos
	 */
	sortArray(a,b) {
		if(a.startPos > b.startPos){
			return 1;
		}
		else if(a.startPos < b.startPos){
			return -1;
		}
		return 0;
	}

	/**
	  * This function is to extract sustrings for formating 
	  * @param string - string to be formatted
	  * @param feedObject - object which contains postions to substrings
	  * @method concatFormatString - function to concat formatted string 
	 */
	extractStringAndType(string, feedObject) {
		var self = this;

		var pos = 0
		let startPos = pos;
		let feedObjectsLooped = 0;
		let noOfLoops = 0;
		let substring = "";
		let sortedFeedObjectArray = feedObject.sort(this.sortArray);

		/* Loops through position characters to extract substrings */
		while(pos < string.length) {
			noOfLoops ++;

			let endPos = pos+1;
			let objTocheck = sortedFeedObjectArray[feedObjectsLooped];
			if(objTocheck) {
				if(objTocheck.startPos === pos){
					substring = string.slice(objTocheck.startPos, objTocheck.endPos);
					self.concatFormatString(substring, objTocheck.type);
					pos = objTocheck.endPos;
					startPos = pos;
					feedObjectsLooped++;
				}
				else if(pos< objTocheck.startPos) {
						substring = string.slice(pos, objTocheck.startPos);
						self.concatFormatString(substring, "");
						pos = objTocheck.startPos;
						startPos = pos;
				}
			}
			else {
				pos = string.length;
				substring = string.slice(startPos,pos);
				self.concatFormatString(substring, "");
			}
		}
	}

	/**
	  * This function is to concat formatted substring
	  * @param string - substring to be formatted
	  * @param type - type of substring
	  * @method formatString - function to format string
	*/
	concatFormatString(string, type) {
		let formattedResult = this.formatString(string, type);
		this.formattedString+=formattedResult;
	}

	/**
	  * This function is to format substring
	  * @param string - substring to be formatted
	  * @param type - type of substring
	  * @method enitityFormatter - function to format entity type
	  * @method userNameFormatter - function to format twitter username type
	  * @method linkFormatter - function to format link type
	*/
	formatString(string, type) {
		let fomatWithType = "";
		switch(type) {
			case 'Enity' : 
				fomatWithType = enitityFormatter(string);
				break;
			case 'Twitter username' :
				fomatWithType = userNameFormatter(string);
				break;
			case 'Link' :
				fomatWithType = linkFormatter(string);
				break;
			default:
				fomatWithType = string;
		}

		return fomatWithType;
	}

	/**
	  * This function to retun formatted substring
	  * @param string - substring to be formatted
	  * @param feedObject - object which contains postions to substrings
	  * @method extractStringAndType - function to extract substrings
	*/
	getFormattedString(string, feedObject){
		this.extractStringAndType(string, feedObject);
		return this.formattedString;
	}
}

module.exports = Module3;