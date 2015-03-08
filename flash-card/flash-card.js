Polymer('flash-card', {

	flip: function(e) {
		
		e.currentTarget.parentElement.toggle();
		
	},

	ready : function () {
		console.log(this.word);
	}
	
})

