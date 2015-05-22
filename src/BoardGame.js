var score = 0;

var BoardGame = cc.LayerColor.extend({

    ctor: function(){
        this._super();
        this.init();
    },

    init: function() {
        this._super();
        this._super ( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0 , 0 ) );
        console.log( 'GameLayer created' );
        console.log( 'Initialized' );
        
        this.setBackground = new cc.Sprite.create( res.bg );
        this.setBackground.setPosition( new cc.Point( screenWidth/2 , screenHeight/2 ) );
        this.addChild(this.setBackground);     

        this.createRoadAtY = 0;
        this.createRoadAtX = 0;

        this.addAirplane();
        this.addCar();
        this.addUFO();
        this.addShip();

        this.addStoreCar();
        this.addStoreAirplane();
        this.addStoreShip();
        this.addStoreUFO();

        this.addKeyboardHandlers();

        this.selectVehicle();
        this.setSelectListMaze();
        this.setSelectListMaze2();
        this.setSelectListMaze3();
        this.setSelectListMaze4();

        this.player = new Vehicle();
        this.store = this.carStorage;
        this.road = new Maze();

        var nowPlayer = this.getPlayer();
        var nowRoad = this.road;
        var boardGame = this;

        // this.labelPlayer = cc.LabelTTF.create( 'Player :'+this.player , 'Arial' , 30);
        // this.labelPlayer.setPosition( new cc.Point(screenWidth-200 , screenHeight-70 ));
        // this.addChild( this.labelPlayer);

        // this.labelRoad = cc.LabelTTF.create( 'Road :'+this.road , 'Arial' , 30);
        // this.labelRoad.setPosition( new cc.Point(screenWidth-200 , screenHeight-170 ));
        // this.addChild( this.labelRoad);

        return true;
    },

    setScore :function( newScore ){
        score = newScore;
    },

    getPlayer : function(){
        return this.player;
    },

    checkIndexFromPlayer : function(player){
        if(player instanceof Ufo)
            return 1;
        else if(player instanceof Airplane)
            return 2;
        else if(player instanceof Car)
            return 3;
        else if(player instanceof Ship)
            return 4;
        else
            console.log('Go to else of Player index');

    },

    checkIndexFromRoad : function(road){
        if(road instanceof Maze)
            return 1;
        else if(road instanceof Maze2)
            return 2;
        else if(road instanceof Maze3)
            return 3;
        else if(road instanceof Maze4)
            return 4;
        else
            console.log('Go to else of Road index');
    },

    getBoardGame : function(){
        return this;
    },


    showStartScene : function(road){
            nowPlayer = boardGame.getPlayer();
            this.posX = nowPlayer.getPositionX();
            this.posY = nowPlayer.getPositionY();
            nowRoad = road;
            console.log('Button select1',this.posX,this.posY,score);
            console.log(boardGame.checkIndexFromRoad(nowRoad));
            this.i = boardGame.checkIndexFromRoad(nowRoad);
            console.log(boardGame.checkIndexFromPlayer(nowPlayer));
            this.j = boardGame.checkIndexFromPlayer(nowPlayer);
            if(this.j>0 && this.i>0){
            cc.director.runScene(new RunScene(this.j , this.i , this.posX , this.posY , score));
            }
            else console.log('Please Select Player');
    },

    setSelectListMaze: function()
    {
        boardGame = this.getBoardGame()

        this.canSelect = new cc.MenuItemImage( res.select1, res.select1, function( )
        {
            boardGame.showStartScene(new Maze());

        },this); 

        this.canSelect = new cc.Menu( this.canSelect);
        this.canSelect.setPosition( new cc.Point( 270 , screenHeight-230 ) );
        this.addChild(this.canSelect);

    },


    setSelectListMaze2: function(){

        boardGame = this.getBoardGame();

        this.canSelect2 = new cc.MenuItemImage( res.select2, res.select2, function()
        {
            boardGame.showStartScene(new Maze2());
        },this);

        this.canSelect2 = new cc.Menu( this.canSelect2);
        this.canSelect2.setPosition( new cc.Point( screenWidth/2 +120 , screenHeight-230 ) );
        this.addChild(this.canSelect2);

    },

    setSelectListMaze3: function(){

        boardGame = this.getBoardGame();

        this.canSelect3 = new cc.MenuItemImage( res.select3, res.select3, function()
        {
            boardGame.showStartScene(new Maze3());
        },this);

        this.canSelect3 = new cc.Menu( this.canSelect3);
        this.canSelect3.setPosition( new cc.Point( 270 , screenHeight-400  ) );
        this.addChild(this.canSelect3);

    },

    setSelectListMaze4: function(){

        boardGame = this.getBoardGame();

        this.canSelect4 = new cc.MenuItemImage( res.select4, res.select4, function()
        {
            boardGame.showStartScene(new Maze4());
        },this);

        this.canSelect4 = new cc.Menu( this.canSelect4);
        this.canSelect4.setPosition( new cc.Point( screenWidth/2 +120 , screenHeight-400 ) );
        this.addChild(this.canSelect4);

    },


    addStoreCar: function(){
        this.carStorage = new CarStore();
        this.carStorage.setPosition( new cc.Point( (screenWidth)/2 , screenHeight-70 ));

        this.addChild( this.carStorage );
        this.carStorage.scheduleUpdate();
        console.log('Show car storage');


    },


    addStoreAirplane: function(){
        this.airplaneStorage = new AirplaneStore();
        this.airplaneStorage.setPosition( new cc.Point( (screenWidth-70)/2, 70));

        this.addChild( this.airplaneStorage );
        this.airplaneStorage.scheduleUpdate();
        console.log('Show airplane storage');
    },

    addStoreShip: function(){
        this.shipStorage = new ShipStore();
        this.shipStorage.setPosition( new cc.Point( 70 , (screenHeight)/2 ));

        this.addChild( this.shipStorage );
        this.shipStorage.scheduleUpdate();
        console.log('Show ship storage');

    },

    addStoreUFO: function(){        
        this.ufoStorage = new UFOStore();
        this.ufoStorage.setPosition( new cc.Point( screenWidth-70, (screenHeight)/2  ));

        this.addChild( this.ufoStorage );
        this.ufoStorage.scheduleUpdate();
        console.log('Show UFO storage');

    },

    addAirplane: function(){
        this.airplane = new Airplane(screenWidth-70 ,screenHeight-70);
        this.addChild( this.airplane );
        this.airplane.scheduleUpdate();

        this.lbAirplane = cc.LabelTTF.create( 'press W' , 'Arial' , 30);
        this.lbAirplane.setPosition(  new cc.Point( screenWidth-70, screenHeight-120 ));
        this.addChild( this.lbAirplane );

    },

    addCar: function(){
        this.car = new Car(70,70);
        this.addChild( this.car );
        this.car.scheduleUpdate();


        this.lbCar = cc.LabelTTF.create( 'press A' , 'Arial' , 30);
        this.lbCar.setPosition(  new cc.Point( 80 , 120 ));
        this.addChild( this.lbCar );
    },

    addUFO: function(){
        this.ufo = new Ufo( 70, screenHeight-70);
        this.addChild( this.ufo );
        this.ufo.scheduleUpdate();

        this.lbUFO = cc.LabelTTF.create( 'press Q' , 'Arial' , 30);
        this.lbUFO.setPosition(  new cc.Point( 80 , screenHeight-120 ));
        this.addChild( this.lbUFO );
    },

    addShip: function(){
        this.ship = new Ship(screenWidth-70 , 70);
        this.addChild( this.ship );
        this.ship.scheduleUpdate();

        this.lbShip = cc.LabelTTF.create( 'press S' , 'Arial' , 30);
        this.lbShip.setPosition(  new cc.Point( screenWidth-70 , 120 ));
        this.addChild( this.lbShip );
    },


    selectVehicle: function(keyCode, event){
        if(keyCode == cc.KEY.q){
            this.player = this.ufo;
            console.log('Select UFO');
        }
        else if(keyCode == cc.KEY.w){
            this.player = this.airplane;
            console.log('Select AIRPLANE');
        }
        else if(keyCode == cc.KEY.a){
            this.player = this.car;
            console.log('Select CAR');
        }
        else if(keyCode == cc.KEY.s){
            this.player = this.ship;
            console.log('Select SHIP');
        } else return;
        this.createRoadAtY = this.player.getPositionY();
        this.createRoadAtX = this.player.getPositionX();
    },

    selectStore: function(keyCode,event){
         if(keyCode == cc.KEY.e){
            this.player = this.ufo;
            console.log('Select UFO');
        }
        else if(keyCode == cc.KEY.r){
            this.player = this.airplane;
            console.log('Select AIRPLANE');
        }
        else if(keyCode == cc.KEY.d){
            this.player = this.car;
            console.log('Select CAR');
        }
        else if(keyCode == cc.KEY.f){
            this.player = this.ship;
            console.log('Select SHIP');
        } else return;
    },

    putRoadOnLayer: function(){
        var i =0;
        var direction=0;
        
        this.lastdirection=0;

        i = Math.floor(Math.random()*4);
        
        if(i==0) direction=1;
        else if(i==1) direction=-1;
        else if(i==2) direction=2;
        else direction = -2;
        
        switch( direction ) {
            case 1:
                this.createRoadAtY += 25;
                this.createRoad( this.createRoadAtX, this.createRoadAtY );
                break;
            case -1:
                this.createRoadAtY -= 25;
                this.createRoad( this.createRoadAtX, this.createRoadAtY );
                break;
            case 2:
                this.createRoadAtX += 25;
                this.createRoad( this.createRoadAtX, this.createRoadAtY );
                break;
            case -2:
                this.createRoadAtX -= 25;
                this.createRoad( this.createRoadAtX, this.createRoadAtY );
                break;

           this.lastdirection=direction;
  
                };
    },


    onKeyDown: function( keyCode, event ) {
        if ( keyCode == cc.KEY.space) {

            this.putRoadOnLayer();
              
        }
        },

    createRoad: function(x, y) {
        var road = new Road(this.player);

        road.setPosition( new cc.Point( x, y ));

        this.addChild( road );
        road.scheduleUpdate();
        },

        onKeyUp: function( keyCode, event ) {

        },


    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
    
        event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
                self.selectVehicle(keyCode, event);
                console.log('kkkk3');
            },

        }, this);
    }

    //     update: function(dt) {

    //     this.labelPlayer.setString( nowPlayer );
    //     this.labelRoad.setString( nowRoad);

    // }


});
 
var StartScene = cc.Scene.extend({

    onEnter: function() {
        this._super();
        // score = nowScore;
        var layer = new BoardGame();
        layer.init();
        this.addChild( layer );
    }
});

var NextScene = cc.Scene.extend({
   onEnter: function(nowScore) {

        this._super();
        score = nowScore;
        var layer = new BoardGame(score);
        layer.init();
        this.addChild( layer );
    }
});