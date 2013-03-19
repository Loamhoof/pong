var tools = {
Point: function(x, y) {
	this.x = x;
	this.y = y;
}
};

tools.Point.prototype.clone = function() {
	return new paper.Point(this.x, this.y);
};

tools.Point.prototype.subtract = function(point) {
	return new paper.Point(this.x - point.x, this.y - point.y);
};

tools.Point.prototype.multiply = function(value) {
	return new paper.Point(this.x * value, this.y * value);
};

tools.Point.prototype.divide = function(value) {
	return new paper.Point(this.x / value, this.y / value);
};

tools.Point.prototype.getLength = function() {
	var l = this.x * this.x + this.y * this.y;
	return Math.sqrt(l);
};

tools.Point.prototype.normalize = function() {
	var l = this.getLength();
	return (new paper.Point(this.x, this.y)).divide(l);
};

tools.Point.prototype.dot = function(point) {
	return this.x * point.x + this.y * point.y;
};

tools.Point.prototype.getAngle = function(point) {
	return Math.atan2(this.y - point.y, this.x - point.x);
};

tools.Point.prototype.clone = function() {
	return new paper.Point(this.x, this.y);
};

module.exports = tools;