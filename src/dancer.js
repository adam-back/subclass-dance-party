// Creates and returns a new makedancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.setPosition(top, left);
    this.step();


  };

  Dancer.prototype.step = function(){
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  Dancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  Dancer.prototype.lineUp = function(){

  var dancerArray = window.dancers;
  for(var i = 0; i < dancerArray.length; i++) {
    if(dancerArray[i].hasClass("shyDancer")) {
      dancerArray[i].css({left: (($('body').width() / 2) - 100) - Math.random() * 100});
      //49er
    } else if(dancerArray[i].hasClass("blinky")) {
      dancerArray[i].css({left: (($('body').width() / 2) + 100) + Math.random() * 100});
      //raider
    } else {
      dancerArray[i].css({left: ($('body').width() / 2) });
      //ball
    }
  }
  };

  Dancer.prototype.marchALittle = function(maxTimes,speed) {
    var times = 0;
    var maxTimes = maxTimes || 500;
    var speed = speed || 1000;
    var context = this;
    setInterval(function(){
      var plusOrMinus = 1;
      if(Math.random() < .5) {
        plusOrMinus = -1;
      }
      
      //if statement deciding whether to set left boundary or right

      if(times < maxTimes) {
      context.march(Math.random() *100 * plusOrMinus, Math.random() *100 * plusOrMinus);
      times++;
      }
    },speed);
  }

  Dancer.prototype.march = function(top,left) {
    var dancerArray = window.dancers;
    for(var i = 0; i < dancerArray.length; i++) {
      var oldTop = +dancerArray[i].css('top').slice(0,-2);
      var oldLeft = +dancerArray[i].css('left').slice(0,-2);
      //if statement deciding whether to set left boundary or right

      dancerArray[i].animate({
        left: Math.min((oldLeft + left), $('body').width() -100),
        top: Math.min((oldTop + top), $('body').height() -100)
      }, 750);
    }

  };



