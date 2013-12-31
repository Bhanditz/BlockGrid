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

		$(this.selector+" .meta .time span").html("0");
		$(this.selector+" .meta .points span").html("0");
	};

	this.run = function() {
		var _game = this,
			selected = null,
			lastEvent = null,
			running = true;
			eventClearSelection = function(e){
				if (!running) return;
				console.log("eventClearSelection", e);
				if (lastEvent == "mousedown")
					$(_game.selector+" .block.selected").removeClass("selected");
				selected = null;
			},
			eventBlockOnClick = function(e){
				if (!running) return;
				e.preventDefault();
				console.log("click", this, _game);
			},
		    eventBlockOnMouseDown = function(e){
				if (!running) return;
				console.log("mousedown", this, _game);
				this.event = e;
				selected = this;
				lastEvent = "mousedown";
				$(this).addClass("selected");
				eventClearSelection(e);
				setTimeout(function(){$(selected).bind("mouseUp")}, 1000);
			},
			eventBlockOnMouseUp = function(e){
				if (!running) return;
				e.preventDefault();
				selected = null;
				try {
					if ((new Date().getTime())-this.event.timeStamp < 100) eventBlockOnClick();
				} catch(exception) {}
				eventClearSelection(e);
			},
			eventMouseMoveOtherBlock = function(e){
				if (!running) return;
				alert("eventMouseMoveOtherBlock");
				console.log("eventMouseMoveOtherBlock", this, e);
			},
			eventBodyOnMouseUp = function(e){
				if (!running) return;
				e.preventDefault();
				selected = null;
				eventClearSelection(e);
			};



		$("body").on("mouseup", eventBodyOnMouseUp);
		for(y = 0; y < this.grid.edgeLength; y++) {
			for(x = 0; x < this.grid.edgeLength; x++) {
				this.grid.matrix[y][x].elem.on("mousedown", eventBlockOnMouseDown);
				this.grid.matrix[y][x].elem.on("mouseup", eventBlockOnMouseUp);
			}
		}

		var gameIntervalTimer = setInterval(function(){
			var time = parseInt($(_game.selector+" .meta .time span").attr("data-time"))-1;
			if (time <= 0) {
				alert("NULLLLLLL");
				running = false;
				clearInterval(gameIntervalTimer);
				return;
			} else {
				$(_game.selector+" .meta .time span").attr("data-time", time);
				$(_game.selector+" .meta .time span").html(time);
			}
		}, 1000);
	};

	var metaElem = $('<article class="meta">'+
						'<div class="time"><span data-time="60"></span></div>'+
						'<div class="points"><span></span></div>'+
					'</article>');
	var gridElem = $('<div class="grid wrapper"></div>');

	$(this.selector).append(metaElem);
	$(this.selector).append(gridElem);
};