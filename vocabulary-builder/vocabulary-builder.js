Polymer('vocabulary-builder', {

	ready: function() {
		console.log("ready");
	},

	wordList: [
		{'name': 'love', 'meaning': 'to like someone'},
		{'name': 'hate', 'meaning': 'to dislike someone'},
		{'name': 'home', 'meaning': 'place where is the heart is'},
		/*{'name': 'understanding', 'meaning': 'an amazing feeling'},
		{'name': 'family', 'meaning': 'people forever'},*/
	],

	toggleDrawer: function () {
		this.$.coreDrawerPanel.togglePanel();
	},

	flip: function(e) {
		//var flipboxName = "flipbox_"+e.target.innerText;
		e.currentTarget.parentElement.toggle();
		
	},

	flipped: function () {
		console.log('flipped');
	}

	
})

