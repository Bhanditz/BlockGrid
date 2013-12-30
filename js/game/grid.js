var Grid = function(block, selector, edgeLength) {

	this.selector   = selector;
	this.edgeLength = edgeLength;
	this.matrix     = new Array(edgeLength);
	this.block      = block;

	for(y = 0; y < this.edgeLength; y++) {
		this.matrix[y] = new Array(this.edgeLength);
		for(x = 0; x < this.edgeLength; x++) {
			this.matrix[y][x] = new Block(this.block);
			this.matrix[y][x].setPosition(x, y);
			this.matrix[y][x].setFamily(parseInt(Math.random() * 5));
			$(this.selector).append(this.matrix[y][x].genElem());
			console.log(this.matrix[y][x].elem);
		}
	}
};