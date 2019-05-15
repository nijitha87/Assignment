/**
  * Function to create position array object
  * @param startPos - Stores start position of substring.
  * @param endPos - Stores end position of substring.
  * @param type - Stores type of substring.
*/
function FeedObject(startPos, endPos, type) {
	this.startPos = startPos;
	this.endPos = endPos;
	this.type = type;
	let feedObj = {
		startPos: startPos,
		endPos: endPos,
		type: type
	}

	return feedObj;
}

module.exports = FeedObject;