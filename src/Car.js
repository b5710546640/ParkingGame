var Car = Vehicle.extend({

    ctor: function(x,y) {
        this._super();
        this.initWithFile( 'res/car.png' );
        console.log('printed car');
        this.X = x;
        this.Y = y;
        this.match = 2;
        this.updatePosition();
    },

    getMatch : function(){
    	return this.match;
    }

});
