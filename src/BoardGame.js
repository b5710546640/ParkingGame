var BoardGame = cc.LayerColor.extend({


    init: function() {
        this._super ( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0 , 0 ) );
        console.log( 'GameLayer created' );
        console.log( 'Initialized' );
        
        this.setBackground = new cc.Sprite.create( "res/bg.jpg" );
        this.setBackground.setPosition( new cc.Point( screenWidth/2 , screenHeight/2 ) );
        this.addChild(this.setBackground);


        this.ship = new Ship();
        this.ship.setPosition( new cc.Point( screenWidth-70 , 70));

        this.addKeyboardHandlers();
        this.addChild( this.ship );
        this.ship.scheduleUpdate();

        this.car = new Car();
        this.car.setPosition( new cc.Point( 70, 70 ));
        
        this.addKeyboardHandlers();
        this.addChild( this.car );
        this.car.scheduleUpdate();

        this.airplane = new Airplane();
        this.airplane.setPosition( new cc.Point( screenWidth-70 ,screenHeight-70));
        
        this.addKeyboardHandlers();
        this.addChild( this.airplane );
        this.airplane.scheduleUpdate();

        this.ufo = new Ufo();
        this.ufo.setPosition( new cc.Point( 70, screenHeight-70));
        this.addKeyboardHandlers();
        this.addChild( this.ufo );
        this.ufo.scheduleUpdate();

        return true;
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