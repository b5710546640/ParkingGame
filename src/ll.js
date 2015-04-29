var Patern1 = Road.extend({

	ctor: function() {
        this._super();
        this.direction = Vehicle.SELECT.FALSE;
    },

    makeRoad: function(){
        for (var i = .length - 1; i >= 0; i--) {
        	Things[i]
        };
    },

    update: function( dt ) {
		var pos = this.getPosition();
		if( this.direction == Vehicle.SELECT.UP){
			// this.setPosition( new cc.Point( 0, pos.y ) );
		}
		// else if(this.direction== Vehicle.DIR.RIGHT){
		// 	if ( pos.x < screenHeight ) {
		// 	    this.setPosition( new cc.Point( pos.x+5, pos.y ) );
		// 	} else {
		// 	    this.setPosition( new cc.Point( 0, pos.y ) );
		// 	}
		// }
	}

});

Vehicle.SELECT = {
    TRUE: 1,
    FALSE: 0
};