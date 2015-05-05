var PlayScene = cc.LayerColor.extend({

	ctor: function(player , mazeNO ){

	this._super();

    if(player == 1 )
    {
      this.player = new Ufo();
    }
    else if(player ==2 )
    {
      this.player = new Airplane();
    }
    else if(player == 3 )
    {
      this.player = new Car();
    }
    else if(player == 4)
    {
      this.player = new Ship();
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

    // this.X = posX;
    // this.Y = posY;

    // console.log(posX);
    // console.log(posY);

    console.log('in ctor');
	},

	init: function(  ){
		    this._super();
        console.log('in init');
		this.setBackground = new cc.Sprite.create( res.bg );
        this.setBackground.setPosition( new cc.Point( screenWidth/2 , screenHeight/2 ) );
        this.addChild(this.setBackground);
        this.maze.setPosition(new cc.Point(150 , 150 ));
        console.log(this.posX);
        console.log(this.posY);
        this.player.setPosition(new cc.Point(150,150));
        this.addChild(this.maze);
        this.addChild(this.player);
	},


    update: function(dt) {

    }





});

var RunScene = cc.Scene.extend({

  ctor: function( receivedPlayer , receivedMaze ){
    this._super();
    this.playerSent = receivedPlayer;
    this.mazeSent = receivedMaze;
    var layer = new PlayScene(this.playerSent  ,this.mazeSent );
    layer.init();
    this.addChild( layer );

  }
});