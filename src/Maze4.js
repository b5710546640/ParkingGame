var Maze4 = Road.extend({
    ctor: function() {
        this._super();
        this.WIDTH = 20;
        this.HEIGHT = 12;
        this.startX = 0;
        this.startY = 5;
        this.endX = 19;
        this.endY = 18;
        this.terminal = 4;
        this.MAP = [
            '####################',
            '#...#...#...#....#.#',
            '#.#.###.#.#.####.#.#',
            '#.#.#***###.#..#.#.#',
            '###.#*#*.#....##...#',
            
            '**#.#*#*####.###.#.#',
            '#*****#*******#..#.#',
            '###.#####.###*#.####',
            '#.#.....#...#*#.#..#',
            '#.##.######.#*#.##.#',
            '#.........#.#*******',
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
        else if( this.MAP[ r ][ c ] == '*' ){
            var s = cc.Sprite.create( res.dot );
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
});