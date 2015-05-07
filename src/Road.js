var Road = cc.Node.extend({

	ctor: function( Vehicle ) {
        this._super();
        this.player = Vehicle;
        this.terminal = 0;
    },

    update: function( dt ) {

	},

    setMaze: function(maze){
        this.MAP = maze.MAP;
    }



    // isWall: function( blockX , blockY ) {
    //     var r = this.player.getPositionX() - blockY - 1;
    //     var c = blockX;
    //     console.log(this.MAP);
    //     console.log(r,c);
    //     console.log(this.MAP[r],this.MAP[r][c]);
    //     return this.MAP[ r ][ c ] == '#';
    // }

});