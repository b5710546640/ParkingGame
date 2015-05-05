var Vehicle = cc.Sprite.extend({

	 ctor: function() {
        this._super();
        this.direction = Vehicle.SELECT.FALSE;
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