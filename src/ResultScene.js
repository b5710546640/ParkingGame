var score = 0;

var ResultScene = cc.LayerColor.extend({

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
    console.log(player,mazeNO);
    console.log(this.mazeNO,this.player);
    this.rightStore = this.maze.getStorage();
    this.selectStore = this.player.getMatch();
    this.isTrue = (this.rightStore == this.selectStore);

    console.log('SCORE :'+score);

	},

	init: function(  ){
        this.setBackground = new cc.Sprite.create( res.bg );
        this.setBackground.setPosition( new cc.Point( screenWidth/2 , screenHeight/2 ) );
        this.addChild(this.setBackground);
		this.addChild(press);
        if(this.isTrue) score++;
        console.log('UPDATE: '+score);
	},

    



});

var EndScene = cc.Scene.extend({

    ctor: function(receivedPlayer , receivedMaze ,x,y ){
    this._super();
    this.playerSent = receivedPlayer;
    this.newX = x;
    this.newY = y;
    this.mazeSent = receivedMaze;
    },

    onEnter: function( ){
    var layer = new ResultScene(this.playerSent  ,this.mazeSent  , this.newX , this.newY);
    layer.init();
    this.addChild( layer );

  }
});