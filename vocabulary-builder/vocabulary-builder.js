(function(window) {

	var LEARN_PAGE_HEADING = "Build Your Vocabulary !",
		MEMORIZE_PAGE_HEADING = "Memorize the word and click the flash card to show its meaning",
		TEST_PAGE_HEADING = "Test your Vocabulary !"

	Polymer('vocabulary-builder', {

		wordlist : [],

		indices : [],

		store : null,
		db : null,
		text : LEARN_PAGE_HEADING,

		ready: function() {
			this.selected = 0;
		},

		onError : function () {
			this.$.wordlistRequest.go();
		},

		onDataRead : function () {

			if(this.wordlist == null || this.wordlist == undefined) {
				this.$.wordlistRequest.go();
				console.log('requesting wordlist to server');
			}
			else
			{
				this.generateArrayIndices();
			}
		},

		onDbInitialized : function (event) {
			// check if wordlist is there in the store. If yes, set wordlist 

			event.preventDefault();
			event.stopPropagation();

			if(this.db != null) {
				var ob = this.$.store.getData("json", "readonly");			
			}
			else
				console.log('db instance is invalid');
		},

		wordList: [],

		toggleDrawer: function () {
			this.$.coreDrawerPanel.togglePanel();
		},

		flip: function(e) {
			e.currentTarget.parentElement.toggle();	
		},
		
		generateSubWordList : function() {

			var list = [];

			for(var i = 0; i < this.indices.length ; i++) {
				list[i] = this.wordlist[this.indices[i]];
			}

			this.sublist = list;

		},

		generateArrayIndices : function () {

			if(this.wordlist != null && this.wordlist != undefined && this.wordlist.length > 0) {

				console.log('fetched wordlist');
				this.$.randomNumberGenerator.generateRandomNumbers();
				this.$.pager.data = this.wordlist;

				if(this.db != null) {

				    console.log('storing data');
				    this.$.store.storeData("json", "readwrite");
				}

				this.$.vocabTester.initialize();
			}			
		},

		indicesChanged : function () {
			if(this.wordlist != null && this.wordlist.length > 0 && this.indices.length > 0)
				this.generateSubWordList();
			else if(this.indices.length == 0)
				this.$.randomNumberGenerator.generateRandomNumbers();
		},

		onPaginationComplete : function (e) {
			this.results = e.detail.data;	
			this.$.vocabTable.refresh();
			this.updateCurrentRange();	
		},

		onPageChange : function (e) {
			this.results = e.detail.data;
			this.$.vocabTable.refresh();	
			this.updateCurrentRange();	
		},

		updateCurrentRange : function() {
			var currentPage = this.$.pager.currentpage;
			var pageCount = this.$.pager.pageCount;
			var addPages, pages = [];

			addPages = function (fromPage, toPage) {

				for(var i=0 ; i<= (toPage - fromPage) ; i++) {
					pages[i] = fromPage + i;
				}
				
			}

			var pagesToDisplay = 10;

			if(currentPage >= 0 && currentPage <= 4) 
				addPages (0, 9);
			else if(currentPage >= pageCount - 4)
				addPages (pageCount - 9, pageCount);
			else
				addPages (currentPage - 4, currentPage + 5);
			this.$.pager.currentRange = pages;
		},

		updateLearnHeading : function() {
			this.text = LEARN_PAGE_HEADING;
			this.$.mainToolbarText.className = "";
			this.$.coreDrawerPanel.closeDrawer();
		},

		updateFlashCardHeading : function() {
			this.text = MEMORIZE_PAGE_HEADING;
			this.$.mainToolbarText.className = "instruction";
			this.$.coreDrawerPanel.closeDrawer();
		},

		updateTestHeading : function () {
			this.text = TEST_PAGE_HEADING;
			this.$.mainToolbarText.className = "";
			this.$.coreDrawerPanel.closeDrawer();
		}	
	})

}(this));
