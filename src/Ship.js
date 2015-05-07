var Ship = Vehicle.extend({

    ctor: function(x,y) {
        this._super();
        this.initWithFile( 'res/ship.png' );
        this.X = x;
        this.Y = y;
        this.match = 4;
        this.updatePosition();
    },

    getMatch :function(){
    	return this.match;
    }


});

