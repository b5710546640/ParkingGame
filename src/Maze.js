var Maze = Road.extend({
    ctor: function() {
        this._super();
        this.WIDTH = 20;
        this.HEIGHT = 12;
        this.startX = 0;
        this.startY = 1;
        this.endX = 6;
        this.endY = 19;
        this.terminal = 1;
        this.MAP = [
            '####################',
            '....#...#...#....#.#',
            '#.#.###.#.#.####.#.#',
            '#.#.#...###.#..#.#.#',
            '###.#.#..#....##...#',
            '#.#.#.#.####.###.#.#',
            '#.....#.......#..#..',
            '###.#####.###.#.####',
            '#.#.....#...#.#.#..#',
            '#.##.######.#.#.##.#',
            '#.........#.#......#',
            '####################'
        ];
        console.log('Print maze');


        for ( var r = 0; r < this.HEIGHT; r++ ) {
        for ( var c = 0; c < this.WIDTH; c++ ) {
        if ( this.MAP[ r ][ c ] == '#' ) {
            var s = cc.Sprite.create( 'res/road.png' );
            s.setAnchorPoint( cc.p( 0, 0 ) );
            s.setPosition( cc.p( c * 25, (this.HEIGHT - r - 1) * 25 ) );
            this.addChild( s );
        }
        }
    }
    },

    getStorage: function(){
        return  this.terminal;
    }

    // getMaze: function(){
    //     return this.MAP;
    // },

    // setMaze: function(maze){
    //    this._super(maze);
    // }
});