//Step 0

//Goal
// 1. Get Senate/Rep Name
// 2. Put in tags
// 3. Get position & state
// 4. Put in tags
// 5. Get contact info
// 6. Put in tags
// 7. Get term of seat
// 8. Put in tags

//*******************************************************************************************************************

var getCongressData = function(congressObj) {
	var congressStr = ''
	congressStr += '<div class = "congress">' + '<h3 class = "memberName">' + congressObj.first_name + ' ' + congressObj.last_name + '</h3>\n'
	congressStr += '<h4 class = "titleAndState">' + congressObj.title + ' -- ' + congressObj.party + '-' + congressObj.state_name + '</h4>'
	congressStr += '<ul class = "contactInfo">'
	
	if (congressObj.email) { //If statements are true, execute the statements
	congressStr += '<li>' + 'email: ' + congressObj.email + '</li>'
}
	if (congressObj.website) {
	congressStr += '<li>' + 'website: ' + congressObj.website + '</li>'
}
	if (congressObj.facebook_id) {
	congressStr += '<li>' + 'facebook: ' + congressObj.facebook_id + '</li>'
}

	if (congressObj.twitter_id) {
	congressStr += '<li>' + 'twitter: ' + congressObj.twitter_id + '</li>'
}
	congressStr += '</ul>'

	congressStr += '<p class = "termEnd">' + 'Term Ending: ' + congressObj.term_end + '</p>' + '</div>'
 	console.log(congressStr)
	return congressStr // returns the variable in full form from the concatenated information
}

//------------------------------------------------------------------------------------------------->
//											CALLBACK
//------------------------------------------------------------------------------------------------->

var handleResponse = function(apiResponse) { // // function handleResponse takes input apiResponse (we are using this to help signify that the promise library goes here)
	var stringHTML = ''
	getCongressData(apiResponse.results[0])
	var containerNode = document.querySelector('#container')
	for (var i = 0; i < apiResponse.results.length; i++) {
		stringHTML += getCongressData(apiResponse.results[i])
	}
	containerNode.innerHTML = stringHTML
}

//------------------------------------------------------------------------------------------------->
//											PROMISE 	
//------------------------------------------------------------------------------------------------->

// Get request sent out for JSON and assigns it to a promise variable
var promise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators')

promise.then(handleResponse) // Use of the .then method to return the promise. Callback function is assigned to handleResponse
