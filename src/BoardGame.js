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

        this.ship = new Ship();
        this.ship.setPosition( new cc.Point( screenWidth-70 , 70));

        this.addChild( this.ship );
        this.ship.scheduleUpdate();

        this.car = new Car();
        this.car.setPosition( new cc.Point( 70, 70 ));

        this.addChild( this.car );
        this.car.scheduleUpdate();

        this.airplane = new Airplane();
        this.airplane.setPosition( new cc.Point( screenWidth-70 ,screenHeight-70));

        this.addChild( this.airplane );
        this.airplane.scheduleUpdate();

        this.ufo = new Ufo();
        this.ufo.setPosition( new cc.Point( 70, screenHeight-70));

        this.addChild( this.ufo );
        this.ufo.scheduleUpdate();

        this.player = new Vehicle();


        return true;
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
        }
    },


    onKeyDown: function( keyCode, event ) {
        if ( keyCode == cc.KEY.space) {
                // console.log('gg');
                //     var x = vehicle.get+Math.random()*100;
                //     var y = screenHeight+Math.random()*100;
                //     var down = Math.random()*100;
                //     var up = Math.random()*100;
                //     while ( ( y>=70  || y<= screenHeight-70 ) && (x <= screenWidth-70 || x>=70 )){
                for (var y = 70 ;  y <= screenHeight-70 ;y+= Math.random()*100){
                    this.createRoad(70,y);
                }
                };
        },

    createRoad: function(x, y) {
        var road = new Road(this.player);
        road.setPosition( new cc.Point( x, y ));

        this.addChild( road );
        road.scheduleUpdate();
        },

        // onKeyUp: function( keyCode, event ) {
        //     //  if ( keyCode == cc.KEY.space ) {
        //     //     // this.ship.switchDirection();
        //     // }
        // },


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