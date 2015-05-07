var Vehicle = cc.Sprite.extend({

     ctor: function(x,y) {
        this._super();
        this.direction = Vehicle.DIR.STILL;
        this.nextDirection = Vehicle.DIR.STILL;
        this.X = x;
        this.Y = y;
        this.match = -1;
        this.updatePosition();
    },

    // isAtCenter: function() {
    //     return XXXXXX; // ... put your conditions here ....
    // },

    isPossibleToMove: function( dir ) {
        var nextBlockX = this.X;
        var nextBlockY = this.Y;
        if ( dir == Vehicle.DIR.STILL ) {
            return true;
        }
        else if( dir == Vehicle.DIR.UP )
            nextBlockY++;
        else if( dir == Vehicle.DIR.DOWN )
            nextBlockY--;
        else if( dir == Vehicle.DIR.RIGHT )
            nextBlockX++;
        else if( dir == Vehicle.DIR.LEFT )
            nextBlockX--;
        console.log(nextBlockY,nextBlockX);
 
        return ! this.maze.isWall( nextBlockX, nextBlockY );
    },

    update: function( dt ) {
        // if ( this.isAtCenter() ) {
            // if ( ! this.isPossibleToMove( this.nextDirection ) ) {
            //     this.nextDirection = Vehicle.DIR.STILL;
            // }
            this.direction = this.nextDirection;
        // }
         switch ( this.direction ) {
        case Vehicle.DIR.UP:
            this.Y += Vehicle.MOVE_STEP;
            break;
        case Vehicle.DIR.DOWN:
            this.Y -= Vehicle.MOVE_STEP;
            break;
        case Vehicle.DIR.LEFT:
            this.X -= Vehicle.MOVE_STEP;
            break;
        case Vehicle.DIR.RIGHT:
            this.X += Vehicle.MOVE_STEP;
            break;
        }
        this.updatePosition();
    },


    getX: function(){
        return this.getPositionX();
    },

    getY: function(){
        return this.getPositionY();
    },


    setNextDirection: function( dir ) {
        this.nextDirection = dir;
    },

    // addKeyboardHandlers: function() {
    //     var self = this;
    //     cc.eventManager.addListener({
    //         event: cc.EventListener.KEYBOARD,
    //         onKeyPressed : function( keyCode, event ) {
    //             self.onKeyDown( keyCode, event );
    //         },
    //         onKeyReleased: function( keyCode, event ) {
    //             self.onKeyUp( keyCode, event );
    //         }
    //     }, this);
    // },
 
    // onKeyDown: function( keyCode, event ) {
    //     switch( keyCode ) {
    //     case cc.KEY.left:
    //         this.setNextDirection(Vehicle.DIR.LEFT );
    //         break;
    //     case cc.KEY.right:
    //         this.setNextDirection(Vehicle.DIR.RIGHT );
    //         break;
    //     case cc.KEY.up:
    //         this.setNextDirection(Vehicle.DIR.UP );
    //         break;
    //     case cc.KEY.down:
    //         this.setNextDirection(Vehicle.DIR.DOWN );
    //         break;
    //     }
    // },

    setMaze: function( maze ) {
        this.maze = maze;
    },
 
    // onKeyUp: function( keyCode, event ) {
    //     this.setNextDirection( Vehicle.DIR.STILL );
    // },

    updatePosition: function() {
        this.setPosition( cc.p( this.X, this.Y ) );
    }

});

Vehicle.MOVE_STEP = 5;
Vehicle.DIR = {
    LEFT: 1,
    RIGHT: 2,
    UP: 3,
    DOWN: 4,
    STILL: 0
};
