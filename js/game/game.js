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
		var _game = this,
			eventClearSelection = function(e){
				$(_game.selector+" .block.selected").removeClass("selected");
			},
			eventBlockOnClick = function(e){
				console.log("click", this, _game);
			},
		    eventBlockOnMouseDown = function(e){
				console.log("mousedown", this, _game);
				this.event=e;
				$(this).addClass("selected");
				eventClearSelection();
			},
			eventBlockOnMouseUp = function(e){
				console.log("mouseup", this, _game);
				eventClearSelection();
				if ((new Date().getTime())-this.event.timeStamp < 100) eventBlockOnClick();
				this.event=e;
			},
			eventBodyOnMouseUp = function(e){
				console.log("mouseup", this, _game);
				eventClearSelection();
			};



		$("body").on("mouseup", eventBodyOnMouseUp);
		for(y = 0; y < this.grid.edgeLength; y++) {
			for(x = 0; x < this.grid.edgeLength; x++) {
//				this.grid.matrix[y][x].elem.on("click", eventBlockOnClick);
				this.grid.matrix[y][x].elem.on("mousedown", eventBlockOnMouseDown);
				this.grid.matrix[y][x].elem.on("mouseup", eventBlockOnMouseUp);
			}
		}
	};

	var metaElem = $('<article class="meta">'+
						'<div class="time"><span></span></div>'+
						'<div class="points"><span></span></div>'+
					'</article>');
	var gridElem = $('<div class="grid wrapper"></div>');

	$(this.selector).append(metaElem);
	$(this.selector).append(gridElem);
};