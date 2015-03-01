Polymer('vocabulary-builder', {

	wordList: [
		{'name': 'love', 'meaning': 'to like someone'},
		{'name': 'hate', 'meaning': 'to dislike someone'},
		{'name': 'home', 'meaning': 'place where is the heart is'},
		/*{'name': 'understanding', 'meaning': 'an amazing feeling'},*/
	],

	toggleDrawer: function () {
		this.$.coreDrawerPanel.togglePanel();
	},

	toggleCard: function (e) {
		/*console.log(e.toElement);
		var meaning = wordList*/
	},

	flip: function(e) {
		//var flipbox = "flipbox_"+e.target.innerText;
		if(e.target.tagName === 'DIV')
			e.target.parentElement.parentElement.toggle();
		else
			e.target.parentElement.toggle();
		
	},

	flipped: function () {
		console.log('flipped');
	}
})