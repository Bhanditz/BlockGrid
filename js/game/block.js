/* *
 * @params: argv1 = instance of Block OR selector
 * @params: argv2 = if argv1 not instance of Block, the edgeLength of block
 * */
var Block = function(argv1, argv2) {


	if (argv1 instanceof Block) {
		this.edgeLength = argv1.edgeLength;
		this.family     = argv1.family;
		this.x          = argv1.x;
		this.y          = argv1.y;
		this.elem       = argv1.elem;
	} else {
		this.edgeLength = argv2;
		this.family     = null;
		this.x          = null;
		this.y          = null;
		this.elem       = null;
	}

	this.setFamily = function(family) {
		this.family = family;
	}
	this.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
	}

	this.genElem = function() {
		this.elem = $('<div class="block block-'+this.x+'-'+this.y+' family'+this.family+'" data-x="'+this.x+'" data-y="'+this.y+'" data-family="'+this.family+'"></div>');
		this.elem.width(this.edgeLength)
		         .height(this.edgeLength);
		return this.elem;
	}
};