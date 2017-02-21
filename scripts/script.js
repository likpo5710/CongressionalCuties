//Step 0

var promise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators')

//Goal
// 1. Get Senate/Rep Name
// 2. Put in tags
// 3. Get position & state
// 4. Put in tags
// 5. Get contact info
// 6. Put in tags
// 7. Get term of seat
// 8. Put in tags

//Step 1

var getCongressData = function(congressObj) {
	var congressStr = ''
	congressStr += '<div class = "congress">' + '<h3 class = "memberName">' + congressObj.first_name + ' ' + congressObj.last_name + '</h3>\n'
	congressStr += '<h4 class = "titleAndState">' + congressObj.title + ' -- ' + congressObj.party + '-' + congressObj.state_name + '</h4>'
	congressStr += '<ul class = "contactInfo">'
	congressStr += '<li>' + 'email: ' + congressObj.email + '</li>'
	congressStr += '<li>' + 'website: ' + congressObj.website + '</li>'
	congressStr += '<li>' + 'facebook: ' + congressObj.facebook_id + '</li>'
	congressStr += '<li>' + 'twitter: ' + congressObj.twitter_id + '</li>'
	congressStr += '<p class = "termEnd">' + 'Term Ending: ' + congressObj.term_end + '</p>' + '</div>'
 	console.log(congressStr)
	return congressStr
}

//Step 2

var handleResponse = function(apiResponse) {
	var stringHTML = ''
	getCongressData(apiResponse.results[0])
	var containerNode = document.querySelector('#container')
	for (var i = 0; i < apiResponse.results.length; i++) {
		stringHTML += getCongressData(apiResponse.results[i])
	}
	containerNode.innerHTML = stringHTML
}

promise.then(handleResponse)
