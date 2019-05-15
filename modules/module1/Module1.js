var module2 = require('../module2/Module2');

/**
  * This class is to store module 1 data and functions
 */
class Module1 {
	constructor() {
		this.feedsOutputObj = {
			module1Output: '',
			module2Output: ''
		};
	}
	/**
	  * Function to add feed string
	  * @param feedData - String that holds the feed string.
	  * @param feedObj - Array which holds start and end position of substring to be formatted and its type.
	*/
	addFeed(feedData,feedObj) {
		this.feedsOutputObj.module1Output = feedData;
		this.addFeedObj(feedObj);
	}

	/**
	  * Function to add feed position array to store positions of substring to be formatted
	  * @param feedObjForFeed - Array which holds start and end position of substring to be formatted and its type.
	*/
	addFeedObj(feedObjForFeed) {
		var feedObj = new module2();
		for(var c in feedObjForFeed) {
			let obj = feedObjForFeed[c];
			feedObj.addFeedObj(obj[0], obj[1], obj[2]);
		}
		this.feedsOutputObj.module2Output = feedObj.getFeedObj();
		
	}

	/**
	  * Function to return module1 and module2 output
	  * @param feedsOutputObj - Object which holds input for module 3.
	*/
	getFeed(){
		return this.feedsOutputObj;
	}
}

module.exports = Module1;