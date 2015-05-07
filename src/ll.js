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

		}

	}

});

Vehicle.SELECT = {
    TRUE: 1,
    FALSE: 0
};