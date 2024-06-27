function generate() {
	var quotes = {
		'- Albert Einstein':
			'"Two things are infinite: the universe and human stupidity; and Im not sure about the universe."',
		'-  Elbert Hubbard':
			'"A friend is someone who knows all about you and still loves you."',
		' Oscar Wilde':
			'"Always forgive your enemies; nothing annoys them so much."',
	}

	var authors = Object.keys(quotes)

	var author = authors[Math.floor(Math.random() * authors.length)]

	var quote = quotes[author]

	document.getElementById('quote').innerHTML = quote
	document.getElementById('author').innerHTML = author
}
