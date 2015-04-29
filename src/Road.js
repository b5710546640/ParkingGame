var Road = cc.Node.extend({

	ctor: function( Vehicle ) {
        this._super();
        this.player = Vehicle;
        // this.initWithFile( 'res/road.png' );
    },

    createRoad: function(x, y) {
        var road = new Road(this.player);
        road.setPosition( new cc.Point( x, y ));

        this.addChild( road );
        road.scheduleUpdate();
    },

    update: function( dt ) {
        // for ( var r = 0; r < this.HEIGHT; r++ ) {
        // for ( var c = 0; c < this.WIDTH; c++ ) {
        //         if ( this.MAP[ r ][ c ] == '#' ) {
        //             var s = cc.Sprite.create( 'res/road.png' );
        //             s.setAnchorPoint( cc.p( 0, 0 ) );
        //             s.setPosition( cc.p( c * 25, (this.HEIGHT - r - 1) * 25 ) );
        //             this.addChild( s );
        //         }
        //     }
        // }
	}

});