var Car = cc.Sprite.extend({

    ctor: function() {
        this._super();
        this.initWithFile( 'res/car.png' );
    },

    update: function( dt ) {
		var pos = this.getPosition();
		if( this.direction == Ship.DIR.UP){
			if ( pos.y < screenHeight ) {
			    this.setPosition( new cc.Point( pos.x, pos.y + 5 ) );
			} else {
			    this.setPosition( new cc.Point( pos.x, 0 ) );
			}
		}
		else if(this.direction== Ship.DIR.RIGHT){
			if ( pos.x < screenHeight ) {
			    this.setPosition( new cc.Point( pos.x+5, pos.y ) );
			} else {
			    this.setPosition( new cc.Point( 0, pos.y ) );
			}
		}
	}

});

Ship.DIR = {
    UP: 1,
    RIGHT: 2
};