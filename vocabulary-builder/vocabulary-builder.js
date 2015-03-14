Polymer('vocabulary-builder', {

	wordlist : [],

	indices : [],

	ready: function() {
		console.log("ready");
		this.selected = 0;
	},

	wordList: [],

	toggleDrawer: function () {
		this.$.coreDrawerPanel.togglePanel();
	},

	flip: function(e) {
		e.currentTarget.parentElement.toggle();	
	},

	flipped: function () {
		console.log('flipped');
	},

	
	generateSubWordList : function() {

		var list = [];

		for(var i = 0; i < this.indices.length ; i++) {
			list[i] = this.wordlist[this.indices[i]];
		}

		this.sublist = list;

	},

	generateArrayIndices : function () {
		if(this.wordlist != null && this.wordlist.length > 0) {
			this.$.randomNumberGenerator.generateRandomNumbers();
		}			
	},

	indicesChanged : function () {
		if(this.wordlist.length > 0 && this.indices.length > 0)
			this.generateSubWordList();
		else if(this.indices.length == 0)
			this.$.randomNumberGenerator.generateRandomNumbers();
	}
})

