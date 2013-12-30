var Game = function(selector) {

	this.selector = selector;
	this.block    = null;
	this.grid     = null;

	this.init = function(block, grid) {
		this.block = block;
		this.grid  = grid;
		$(this.selector)
			.width(this.block.edgeLength*this.grid.edgeLength)
			.height(this.block.edgeLength*this.grid.edgeLength);
	};

	this.run = function() {
	};

	var metaElem = $('<article class="meta">'+
						'<div class="time"><span></span></div>'+
						'<div class="points"><span></span></div>'+
					'</article>');
	var gridElem = $('<div class="grid wrapper"></div>');

	$(this.selector).append(metaElem);
	$(this.selector).append(gridElem);
};