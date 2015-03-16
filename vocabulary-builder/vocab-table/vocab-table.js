Polymer('vocab-table', {

	words : [],

	numberOfTables : 1,

	wordsPerTable : 1,

	ready : function () {

	},

	refresh : function () {

		this.wordsPerTable = this.words.length / this.numberOfTables;
	}
});