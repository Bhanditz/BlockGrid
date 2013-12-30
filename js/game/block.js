/* *
 * @params: argv1 = instance of Block OR selector
 * @params: argv2 = if argv1 not instance of Block, the edgeLength of block
 * */
var Block = function(argv1, argv2) {


	if (argv1 instanceof Block) {
		this.selector   = argv1.selector;
		this.edgeLength = argv1.edgeLength;
		this.family     = argv1.family;
		this.x          = argv1.x;
		this.y          = argv1.y;
	} else {
		if (typeof argv3 == undefined) argv3 = parseInt(Math.random() * 5);

		this.selector   = argv1;
		this.edgeLength = argv2;
		this.family     = null;
		this.x          = null;
		this.y          = null;
	}

	this.setFamily = function(family) {
		this.family = family;
	}
	this.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
	}

	this.genElem = function() {
		return '<div class="'+this.selector+' .block-'+this.x+'-'+this.y+'" data-x="'+this.x+'" data-y="'+this.y+'" data-family="'+this.family+'"></div>';
	}
};