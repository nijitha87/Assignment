function FormatTwitterUsername(username) {

	let user = username.slice(1,username.length)
	let accountLink = "https://twitter.com/"+user;
	let formattedString = '@<a href="'+accountLink+'">'+user+'</a>';

	return formattedString;
}

module.exports = FormatTwitterUsername;