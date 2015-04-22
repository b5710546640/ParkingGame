var Road = cc.Sprite.extend({

	ctor: function( Vehicle ) {
        this._super();
        this.player = Vehicle;
        this.initWithFile( 'res/road.png' );
    },

    createRoad: function(x, y) {
        var road = new Road(this.player);
        road.setPosition( new cc.Point( x, y ));

        this.addChild( road );
        road.scheduleUpdate();
    },

    update: function( dt ) {
  //       var pos = this.player.getPosition();		
		// if( this.direction == Vehicle.SELECT.TRUE){
		// 	this.setPosition( pos.x+5, pos.y) ;
		// }
	}

});