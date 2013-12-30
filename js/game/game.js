var Game = function(selector) {
	var t = {
		selector: selector,
		block:    null,
		grid:     null
	};

	t.init = function(block, grid) {
		this.block = block;
		this.grid  = grid;
	};

	t.run = function() {
	};
	return t;
};