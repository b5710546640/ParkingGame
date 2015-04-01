var Ufo = cc.Sprite.extend({

    ctor: function() {
        this._super();
        this.initWithFile( 'res/ufo.png' );
    },

    update: function( dt ) {
		var pos = this.getPosition();
		if( this.direction == Ufo.DIR.UP){
			if ( pos.y < screenHeight ) {
			    this.setPosition( new cc.Point( pos.x, pos.y + 5 ) );
			} else {
			    this.setPosition( new cc.Point( pos.x, 0 ) );
			}
		}
		else if(this.direction== Ufo.DIR.RIGHT){
			if ( pos.x < screenHeight ) {
			    this.setPosition( new cc.Point( pos.x+5, pos.y ) );
			} else {
			    this.setPosition( new cc.Point( 0, pos.y ) );
			}
		}
	}

});

Ufo.DIR = {
    UP: 1,
    RIGHT: 2
};