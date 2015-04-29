var BoardGame = cc.LayerColor.extend({

    init: function() {
        this._super ( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0 , 0 ) );
        console.log( 'GameLayer created' );
        console.log( 'Initialized' );
        
        this.setBackground = new cc.Sprite.create( "res/bg.jpg" );
        this.setBackground.setPosition( new cc.Point( screenWidth/2 , screenHeight/2 ) );
        this.addChild(this.setBackground);

        this.addKeyboardHandlers();


        this.player = new Vehicle();
        // this.road = new 
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

        this.drawTheMaze();

        return true;
    },

    drawTheMaze: function(){
        this.maze = new Maze();
        this.maze.setPosition( cc.p( 150, 150 ) );
        this.maze.scheduleUpdate();
        this.addChild( this.maze );
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
        this.airplane = new Airplane();
        this.airplane.setPosition( new cc.Point( screenWidth-70 ,screenHeight-70));

        this.addChild( this.airplane );
        this.airplane.scheduleUpdate();
    },

    addCar: function(){
        this.car = new Car();
        this.car.setPosition( new cc.Point( 70, 70 ));

        this.addChild( this.car );
        this.car.scheduleUpdate();
    },

    addUFO: function(){
        this.ufo = new Ufo();
        this.ufo.setPosition( new cc.Point( 70, screenHeight-70));

        this.addChild( this.ufo );
        this.ufo.scheduleUpdate();
    },

    addShip: function(){
        this.ship = new Ship();
        this.ship.setPosition( new cc.Point( screenWidth-70 , 70));

        this.addChild( this.ship );
        this.ship.scheduleUpdate();
    },

    //Road 20x20 23,33

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
        // this.road
                // for (var y = this.player.getPositionY();  y <= screenHeight-70 ;y+=25 ){
                    //if(direction!=0 && this.lastdirection==direction*(-1)) ;
                    //else{
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
                    //}
           this.lastdirection=direction;
  

                // }
                };
    },


    onKeyDown: function( keyCode, event ) {
        if ( keyCode == cc.KEY.space) {

            this.putRoadOnLayer();
                // console.log('gg');
                //     var x = vehicle.get+Math.random()*100;
                //     var y = screenHeight+Math.random()*100;
                //     var down = Math.random()*100;
                //     var up = Math.random()*100;
                //     while ( ( y>=70  || y<= screenHeight-70 ) && (x <= screenWidth-70 || x>=70 )){
        }
        },

    createRoad: function(x, y) {
        var road = new Road(this.player);
        // layer1[x][y] = ro
        road.setPosition( new cc.Point( x, y ));

        this.addChild( road );
        road.scheduleUpdate();
        },

        onKeyUp: function( keyCode, event ) {
            //  if ( keyCode == cc.KEY.space ) {
            //     // this.ship.switchDirection();
            // }
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
            // onKeyReleased: function( keyCode, event ) {
            //     self.onKeyUp( keyCode, event );
            //     console.log('kkkk4');
            // }
        }, this);
    }

});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new BoardGame();
        layer.init();
        this.addChild( layer );
    }
});