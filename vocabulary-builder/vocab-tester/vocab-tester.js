Polymer('vocab-tester', {

	selected : -1,
	count : 10,
	numberOfOptions : 4,
	wordlist : [],
	sublist : [],
	correctMeaningIndices : [],
	wrongMeaningIndices : [],
	questionaire : [],
	questionNumber : 0,

	ready : function () {
		this.$.previous.disabled = true;
	},

	initialize : function () {
		if(this.wordlist.length > 0) {
			this.$.randomNumberGenerator1.generateRandomNumbers();
		}
	},

	setPreviousWord : function () {
		if(this.questionNumber > 0)
			this.questionNumber--;
		if(this.questionNumber == 0)
			this.$.previous.disabled = true;

		if(this.$.next.disabled == true)
			this.$.next.disabled = false;
	},

	setNextWord : function () {
		if(this.questionNumber < this.count - 1)
			this.questionNumber++;
		if(this.questionNumber == this.count - 1)
			this.$.next.disabled = true;

		if(this.$.previous.disabled == true)
			this.$.previous.disabled = false;
	},

	selectedChanged : function () {
		//console.log(this.selected);
		this.questionaire[this.questionNumber].selected = this.selected;
		console.log(this.questionaire);
	},

	
	generateSubWordList : function() {

		var list = [];

		for(var i = 0; i < this.indices.length ; i++) {
			list[i] = this.wordlist[this.indices[i]];
		}

		this.sublist = list;

	},

	positionsInitialized : function () {
		
	},

	incorrectIndicesInitialized : function () {
		
		if(this.wordlist.length > 0 && this.correctMeaningIndices.length > 0 && 
			this.indices.length > 0 && this.wrongMeaningIndices.length >= 0) {
			this.initializeTest();
		}
	},

	initializeTest : function() {
		var count = 0;
		for(var i = 0;i < this.count ; i++) {

			this.questionaire[i] = {};
			this.questionaire[i].word = this.sublist[i].name;
			this.questionaire[i].options = [];
			this.questionaire[i].selected = -1;

			for(var j = 0 ; j < this.numberOfOptions ; j++) {
			
				if(j != this.correctMeaningIndices[i]) {
					
					this.questionaire[i].options[j] = this.wordlist[this.wrongMeaningIndices[count]].meaning;	
					count++;
				}					
			}
			this.questionaire[i].options[this.correctMeaningIndices[i]] = this.sublist[i].meaning;
		}
		console.log(this.questionaire);
	},

	testWordsInitialized : function (e) {
		e.preventDefault();
		e.stopPropagation();

		if(this.wordlist != null && this.wordlist.length > 0 && this.indices.length > 0) {
			this.generateSubWordList();
			this.$.randomNumberGenerator3.generateRandomNumbers();
		}
	}
});

