
var BlueJumper = function(top, left, timeBetweenSteps){
    Dancer.call(this, ($('body').height() / 2), ($('body').width() / 2), 500);
    this.$node.toggleClass('blueJumper');
    // this.$node.addClass('crazyBlue');
 };

BlueJumper.prototype = Object.create(Dancer.prototype);
BlueJumper.prototype.constructor = BlueJumper;

// BlueJumper.prototype.step = function() {
//   Dancer.prototype.step.call(this);
// };

