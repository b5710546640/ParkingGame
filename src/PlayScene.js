var PlayScene = cc.LayerColor.extend({

	ctor: function(player , mazeNO ,x,y){

	this._super();

    if(player == 1 )
    {
      this.player = new Ufo(x,y);
    }
    else if(player ==2 )
    {
      this.player = new Airplane(x,y);
    }
    else if(player == 3 )
    {
      this.player = new Car(x,y);
    }
    else if(player == 4)
    {
      this.player = new Ship(x,y);
    }


    if(mazeNO == 1 )
    {
      this.maze = new Maze();
    }
    else if(mazeNO == 2 )
    {
      this.maze = new Maze2();
    }
    else if(mazeNO == 3 )
    {
      this.maze = new Maze3();
    }
    else if(mazeNO == 4 )
    {
      this.maze = new Maze4();
    }

    this.X = x;
    this.Y = y;

    this.indexPlayer = player;
    this.indexMaze = mazeNO;

    console.log(player,this.X);
    console.log(mazeNO,this.Y);

    console.log('in ctor'+x+' '+y);
	},

	init: function(  ){
		this._super();
        console.log('in init');
		this.setBackground = new cc.Sprite.create( res.bg );
        var press = new cc.Sprite.create( res.pressEnter );
        this.setBackground.setPosition( new cc.Point( screenWidth/2 , screenHeight/2 ) );
        press.setPosition( new cc.Point( (screenWidth/2)-10 , (screenHeight/2)-200));
        this.addChild(this.setBackground);
        this.maze.setPosition(new cc.Point(150 , 150 ));
        this.player.setPosition(new cc.Point(this.X,this.Y));
        this.addChild(this.maze);
        this.addChild(this.player);
        this.addChild(press);
        this.maze.setMaze(this.maze);
        this.player.setMaze(this.maze);
        this.player.scheduleUpdate();
        this.addKeyboardHandlers();
	},

    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },
 
    onKeyDown: function( keyCode, event ) {
        switch( keyCode ) {
        case cc.KEY.left:
            this.player.setNextDirection(Vehicle.DIR.LEFT );
            break;
        case cc.KEY.right:
            this.player.setNextDirection(Vehicle.DIR.RIGHT );
            break;
        case cc.KEY.up:
            this.player.setNextDirection(Vehicle.DIR.UP );
            break;
        case cc.KEY.down:
            this.player.setNextDirection(Vehicle.DIR.DOWN );
            break;
        }
    },
 
    onKeyUp: function( keyCode, event ) {
        console.log(keyCode);
         if(keyCode== cc.KEY.enter){
            console.log('into');
            cc.director.runScene(new EndScene(this.indexPlayer,this.indexMaze));
        }
        this.player.setNextDirection( Vehicle.DIR.STILL );
    },

    update: function(dt) {

    }



});

var RunScene = cc.Scene.extend({

  ctor: function( receivedPlayer , receivedMaze , x , y ){
    this._super();
    this.playerSent = receivedPlayer;
    this.mazeSent = receivedMaze;
    this.newX = x;
    this.newY = y;
    var layer = new PlayScene(this.playerSent  ,this.mazeSent , this.newX , this.newY);
    layer.init();
    this.addChild( layer );

  }
});