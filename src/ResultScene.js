var ResultScene = cc.LayerColor.extend({

	ctor: function(player , mazeNO ,x,y , newScore){

    this._super();

    this.score = newScore;

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
    this.addKeyboardHandlers();
    this.init();
    console.log('SCORE :'+this.score);


	},

	init: function(  ){
        // this._super();
        if(this.isTrue) this.score++;
        console.log('UPDATE: '+this.score);
        
        this.labelScore = cc.LabelTTF.create( 'Your score :'+this.score , 'Arial' , 40);
        this.labelScore.setPosition( new cc.Point(screenWidth/2 , screenHeight/2 ));
        
        this.setStorage(this.selectStore);
        this.player.setPosition(new cc.Point((150) , (screenHeight-50)/2));
        this.addChild(this.player,2);
        this.setBackground = new cc.Sprite.create( res.bg );
        this.setBackground.setPosition( new cc.Point( screenWidth/2 , screenHeight/2 ) );
        this.addChild( this.labelScore ,2 );
        this.addChild(this.setBackground , 1);
       
        
        // this.canSe = new cc.MenuItemImage( res.pressEnter, res.pressEnterR, function()
        // {
        //     console.log('Click');
        //    cc.director.runScene(new NextScene(this.score));
        // },this);

        // this.Selec = new cc.Menu( this.canSe);
        // this.Selec.setPosition( new cc.Point( 270 , screenHeight-400  ) );
        // this.addChild(this.Selec,2);

        this.scheduleUpdate();
        this.addKeyboardHandlers();

	},

    setStorage: function( terminal ){
        console.log('setStorage',terminal);
    if(terminal == 1 )
    {
     this.storage = new UFOStore();
     console.log('create store');
    }
    else if(terminal == 2 )
    {
      this.storage = new CarStore();
    }
    else if( terminal == 3 )
    {
      this.storage = new AirplaneStore();
    }
    else if(terminal == 4 )
    {
      this.storage = new ShipStore();
    }
    this.storage.setPosition( new cc.Point( (screenWidth-150) , (screenHeight-50)/2 ) )
    this.addChild( this.storage,2);
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
        
    },
    
    
    onKeyUp: function( keyCode, event ) {
        if (keyCode == cc.KEY.enter) {
           
            cc.director.runScene(new StartScene());
        }
    },

    update: function(dt) {
        this.labelScore.setString(this.score);
        
    }



});

var EndScene = cc.Scene.extend({

    ctor: function(receivedPlayer , receivedMaze ,x,y ,newScore ){
    this._super();
    this.playerSent = receivedPlayer;
    this.newX = x;
    this.newY = y;
    this.mazeSent = receivedMaze;
    this.newScore = newScore;
    console.log('ctor :'+newScore);
    },

    onEnter: function( ){
    var layer = new ResultScene(this.playerSent  ,this.mazeSent  , this.newX , this.newY , this.newScore);
    this.addChild( layer );
    console.log('onEnter :'+this.newScore);
  }
});