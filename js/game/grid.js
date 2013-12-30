var Grid = function(gameSelector, block, edgeLength) {

	this.edgeLength = edgeLength;
	this.matrix     = new Array(edgeLength);
	this.block      = block;

	for(y = 0; y < this.edgeLength; y++) {
		this.matrix[y] = new Array(this.edgeLength);
		for(x = 0; x < this.edgeLength; x++) {
			this.matrix[y][x] = new Block(this.block);
			this.matrix[y][x].setPosition(x, y);
			this.matrix[y][x].setFamily(1 + parseInt(Math.random() * 5));
			this.matrix[y][x].genElem();
			this.matrix[y][x].elem.css("top",  y * this.block.edgeLength)
			                      .css("left", x * this.block.edgeLength);
			$(gameSelector+" .grid").append(this.matrix[y][x].elem);

		}
	}
};