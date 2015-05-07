var Ufo = Vehicle.extend({

    ctor: function(x,y) {
        this._super();
        this.initWithFile( 'res/ufo.png' );
        this.X = x;
        this.Y = y;
        this.match = 1;
        this.updatePosition();
    },

    getMatch : function(){
    	return this.match;
    }

});
