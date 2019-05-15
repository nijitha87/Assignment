var feedObject = require('./FeedObject');

/**
  * This class is to store module 2 data and functions
 */
class Module2 {
	constructor() {
		this.feedObjectArray = new Array();
	}

	/**
	  * Function to add feeds to object
	  * @param startPos - Stores start position of substring.
	  * @param endPos - Stores end position of substring.
	  * @param type - Stores type of substring.
	*/
	addFeedObj(startPos, endPos, type) {
		let feedTypeObject = new feedObject(startPos, endPos, type);
		this.feedObjectArray.push(feedTypeObject);
	}

	/**
	  * Function to get position array object
	*/
	getFeedObj(){
		return this.feedObjectArray;
	}
}

module.exports = Module2;