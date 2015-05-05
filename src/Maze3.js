var Maze3 = Road.extend({
    ctor: function() {
        this._super();
        this.WIDTH = 20;
        this.HEIGHT = 12;
        this.MAP = [
            '####################',
            '#...#...#...#....#..',
            '#.#.###.#.#.####.#.#',
            '#.#.#...###.#..#.#.#',
            '###.#.#..#....##...#',
            '#.#.#.#.####.###.#.#',
            '#.....#.......#..#..',
            '###.#####.###.#.####',
            '#.#.....#...#.#.#..#',
            '#.##.######.#.#.##.#',
            '#.......#...#......#',
            '#########.##########'
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
    }
});