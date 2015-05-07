var Airplane = Vehicle.extend({

    ctor: function(x,y) {
        this._super();
        this.initWithFile( 'res/airplane.png' );
  		this.X = x;
        this.Y = y;
        this.match = 3;
        this.updatePosition();
    },

    getMatch: function(){
    	return this.match;
    }

});
