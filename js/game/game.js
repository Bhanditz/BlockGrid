var Game = function(selector) {

	this.selector = selector;
	this.block    = null;
	this.grid     = null;

	this.init = function(block, grid) {
		this.block = block;
		this.grid  = grid;
	};

	this.run = function() {
	};
};