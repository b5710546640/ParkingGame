var Road = cc.Sprite.extend({

	ctor: function( Vehicle ) {
        this._super();
        this.player = Vehicle;
        this.initWithFile( 'res/road.png' );
    },

    update: function( dt ) {
        var pos = this.player.getPosition();		
		if( this.direction == Vehicle.SELECT.TRUE){
			this.setPosition( pos.x+5, pos.y) ;
		}
	}

});